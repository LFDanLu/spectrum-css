const path = require('path');
const fsp = require('fs').promises;
const gulp = require('gulp');
const ext = require('replace-ext');
const logger = require('gulplog');
const through = require('through2');

function stripReference(value) {
  return value.replace(/(colorStopData|colorTokens|scaleData|dimensionTokens|colorAliases|dimensionAliases)\./g, '');
}

function getJSVariableReference(value) {
  let reference = stripReference(value);
  let parts = reference.split('.');
  let finalReference = parts.shift() + parts.map(JSON.stringify).map(value => `[${value}]`).join('');
  return finalReference;
}

function getExport(key, value) {
  if (value[0] === '$') {
    let reference = getJSVariableReference(value.substr(1));
    return `exports[${JSON.stringify(key)}] = ${reference};\n`;
  }
  else {
    return `exports[${JSON.stringify(key)}] = ${JSON.stringify(value)};\n`;
  }
}

function getCSSVariableReference(value) {
  // Strip the stop information
  value = value.replace(/colorStopData\..*?\.colorTokens\./, 'global-color.');
  value = value.replace(/colorStopData\..*?\.colorAliases\./, 'alias.');
  // Strip the scale information
  value = value.replace(/scaleData\..*?\.dimensionTokens\./, 'global-dimension.');
  value = value.replace(/scaleData\..*?\.dimensionAliases\./, 'alias.');
  // Sub in proper names for globals
  value = value.replace(/colorGlobals\./, 'global-color.');
  value = value.replace(/dimensionGlobals\./, 'global-dimension.');
  value = value.replace(/fontGlobals\./, 'global-font.');
  value = value.replace(/animationGlobals\./, 'global-animation.');
  value = value.replace(/staticAliases\./, 'alias.');

  let parts = value.split('.');
  return '--spectrum-' + parts.join('-');
}

function getCSSVar(prefix, key, value) {
  key = prefix ? `${prefix}-${key}` : key;
  key = `--spectrum-${key}`;
  if (value[0] === '$') {
    let reference = getCSSVariableReference(value.substr(1));
    return `  ${key}: var(${reference});\n`;
  }
  else {
    return `  ${key}: ${value};\n`;
  }
}

function generateDNAFiles() {
  // Base variables we can just map directly
  let flatVars = [
    'colorGlobals',
    'fontGlobals',
    'dimensionGlobals',
    'animationGlobals',
    'staticAliases'
  ];

  let dropTokens = {
    'name': true,
    'description': true,
    'status:': true,
    'varBaseName': true
  };

  const dnaJSONPath = path.join(path.dirname(require.resolve('@spectrum/spectrum-dna')), '..', 'dist', 'data', 'json', 'dna-linked.json');
  return gulp.src(dnaJSONPath)
    .pipe(through.obj(function translateJSON(file, enc, cb) {

      let pushFile = (contents, fileName, folder) => {
        let vinylFile = file.clone({ contents: false });
        vinylFile.path = path.join(file.base, folder || '', fileName);
        vinylFile.contents = Buffer.from(contents);
        this.push(vinylFile);
      };

      let generateCSSFile = (sections, fileName, folder) => {
        let contents = `:root {\n`;

        sections.forEach(section => {
          let prefix = section.varBaseName;
          for (let key in section) {
            if (dropTokens[key]) {
              continue;
            }

            let value = section[key];
            contents += getCSSVar(prefix, key, value);
          }
        });

        contents += `}\n`;

        pushFile(contents, `spectrum-${fileName}.css`, folder);
      };

      let generateCSSIndexFile = (files, folder) => {
        let contents = `${files.map(module => `@import ${JSON.stringify(module)};`).join('\n')}`;
        pushFile(contents, 'index.css', folder);
      };

      let generateJSIndexFile = (files, folder) => {
        let contents = `${files.map(module => `exports[${JSON.stringify(module.replace(/.*?\/(.*?)/, '$1'))}] = require("./${module}.js");`).join('\n')}`;
        pushFile(contents, 'index.js', folder);
      };

      let generateJSFile = (sections, fileName, folder) => {
        let folderParts = folder.split('/');
        let folderCount = folderParts.length;
        let basePath = folderCount > 1 ? '../'.repeat(folderCount - 1) : './';
        let contents = '';

        // We have issues with switch, so only allow self refs for base vars
        if (folderCount === 1) {
          contents += `const ${fileName} = exports;\n`;
        }

        let dependencies = {};

        sections.forEach(section => {
          for (let key in section) {
            if (dropTokens[key]) {
              continue;
            }

            let value = section[key];
            contents += getExport(key, value);

            if (value[0] === '$') {
              let dependency = stripReference(value.substr(1)).split('.').shift();
              if (dependency != fileName) {
                dependencies[dependency] = true;
              }
            }
          }
        });

        let requires = '';
        for (let dependency in dependencies) {
          requires += `const ${dependency} = require('${basePath}${dependency}.js');\n`;
        }

        pushFile(requires + contents, `${fileName}.js`, folder);
        dnaModules.push(path.join(folderParts.slice(1).join('/'), fileName));
      };

      let generateFiles = (sections, fileName, folder = '') => {
        generateCSSFile(sections, fileName, `css/${folder}`);
        generateJSFile(sections, fileName, `js/${folder}`);
      };

      let data = JSON.parse(String(file.contents));
      let dnaData = data.dna;
      let metadata = {
        'dna-version': dnaData.version
      };
      let dnaModules = [];

      // Globals
      flatVars.forEach(key => {
        generateJSFile([dnaData[key]], key, 'js/globals');
        generateCSSFile([dnaData[key]], key, 'css/globals');
      });

      // Stops
      for (let stopName in dnaData.colorStopData) {
        let stop = dnaData.colorStopData[stopName];
        if (stop.colorTokens.status === 'Deprecated') {
          continue;
        }

        generateFiles([
          stop.colorTokens,
          stop.colorAliases,
          stop.colorSemantics
        ], stopName, 'themes');
      }

      // Scales
      for (let scaleName in dnaData.scaleData) {
        let scale = dnaData.scaleData[scaleName];

        generateFiles([
          scale.dimensionTokens,
          scale.dimensionAliases
        ], scaleName, 'scales');
      }

      // Elements
      let stop = dnaData.elements[Object.keys(dnaData.elements)[0]];
      let scale = stop[Object.keys(stop)[0]];

      for (let elementName in scale) {
        let element = scale[elementName];

        let allVariables = {};
        let jsVariables = {};
        let colorVariables = [];
        let dimensionVariables = [];
        for (let variantName in element) {
          let variant = element[variantName];

          let metadataKeyBase = 'spectrum-' + elementName + (variantName === 'default' ? '' : `-${variantName}`);
          metadata[`${metadataKeyBase}-name`] = variant.name;
          metadata[`${metadataKeyBase}-description`] = variant.description;
          metadata[`${metadataKeyBase}-status`] = variant.status;
          metadata[`${metadataKeyBase}-version`] = variant.version;

          if (variant.states) {
            for (let stateName in variant.states) {
              let state = variant.states[stateName];
              for (let key in state) {
                let value = state[key];
                let varName = key;
                if (stateName !== 'default') {
                  varName += `-${stateName}`;
                }
                if (allVariables[varName]) {
                  throw new Error(`${varName} already defined for ${variantName}!`);
                }
                allVariables[`${variant.varBaseName}-${varName}`] = value;
                jsVariables[varName] = value;
                colorVariables[key] = value;
              }
            }
          }

          if (variant.dimensions) {
            for (let key in variant.dimensions) {
              let varName = key;
              let value = variant.dimensions[varName];
              allVariables[`${variant.varBaseName}-${varName}`] = value;
              jsVariables[varName] = value;
              dimensionVariables[varName] = value;
            }
          }

          if (variant.animation) {
            for (let key in variant.animation) {
              let varName = key;
              let value = variant.animation[varName];
              allVariables[`${variant.varBaseName}-${varName}`] = value;
              jsVariables[varName] = value;
              dimensionVariables[varName] = value;
            }
          }

          if (variant.colors) {
            for (let key in variant.colors) {
              let varName = key;
              let value = variant.colors[varName];
              allVariables[`${variant.varBaseName}-${varName}`] = value;
              jsVariables[varName] = value;
              colorVariables[varName] = value;
            }
          }
        }

        generateJSFile([
          jsVariables
        ], elementName, 'js/components');

        generateCSSFile([
          allVariables
        ], elementName, 'css/components');

        pushFile(JSON.stringify(metadata, null, 2), 'spectrum-metadata.json', 'json/');
        generateJSIndexFile(dnaModules, 'js/');
      }

      cb();
    }))
    .pipe(gulp.dest('./'))
}

exports.updateDNA = gulp.series(
  generateDNAFiles
);
