const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const medium = require('../medium.js');
const body-dimensions = exports;
exports["text-font-family"] = staticAliases["body-text-font-family"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = staticAliases["body-text-font-weight"];
exports["text-line-height"] = staticAliases["body-text-line-height"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-none"];
exports["text-transform"] = "none";
exports["margin-top"] = "0px";
exports["margin-bottom-multiplier"] = staticAliases["body-margin-bottom"];
exports["text-size"] = medium["font-size-75"];
exports["margin-bottom"] = medium["size-100"];
exports["font-line-height"] = medium["dimensionAliases"].["line-height-small"];
