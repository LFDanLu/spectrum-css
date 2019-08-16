const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const medium = require('../medium.js');
const lightest = require('../lightest.js');
exports["text-font-family"] = staticAliases["body-text-font-family"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = staticAliases["heading-text-font-weight-regular"];
exports["text-line-height"] = staticAliases["heading-text-line-height"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-medium"];
exports["text-transform"] = "uppercase";
exports["margin-bottom-multiplier"] = staticAliases["heading-margin-bottom"];
exports["text-size"] = medium["font-size-50"];
exports["margin-top"] = medium["font-size-75"];
exports["margin-bottom"] = medium["size-40"];
exports["text-color"] = lightest["gray-700"];
exports["font-line-height"] = fontGlobals["line-height-small"];
