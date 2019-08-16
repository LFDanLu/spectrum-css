const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const medium = require('../medium.js');
const lightest = require('../lightest.js');
exports["text-font-family"] = staticAliases["font-family-zh"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = staticAliases["han-heading-text-font-weight-strong-strong"];
exports["text-line-height"] = staticAliases["heading-han-text-line-height"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-han"];
exports["text-transform"] = "none";
exports["margin-bottom-multiplier"] = staticAliases["heading-margin-bottom"];
exports["text-size"] = medium["heading-han-display2-text-size"];
exports["margin-top"] = medium["heading-han-display2-margin-top"];
exports["margin-bottom"] = medium["size-115"];
exports["text-color"] = lightest["heading-text-color"];
