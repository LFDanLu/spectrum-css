const colorGlobals = require('../colorGlobals.js');
const lightest = require('../lightest.js');
const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const medium = require('../medium.js');
exports["gray-background-color"] = colorGlobals["static-gray-700"];
exports["green-background-color"] = colorGlobals["static-green-600"];
exports["blue-background-color"] = colorGlobals["static-blue"];
exports["red-background-color"] = colorGlobals["static-red-600"];
exports["seafoam-background-color"] = lightest["seafoam-400"];
exports["fuchsia-background-color"] = lightest["fuchsia-400"];
exports["orange-background-color"] = colorGlobals["static-orange-600"];
exports["yellow-background-color"] = lightest["yellow-400"];
exports["text-color"] = colorGlobals["static-white"];
exports["background-color-disabled"] = lightest["gray-200"];
exports["text-color-disabled"] = colorGlobals["static-white"];
exports["text-font-family"] = staticAliases["body-text-font-family"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = fontGlobals["weight-regular"];
exports["text-line-height"] = medium["line-height-large"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-none"];
exports["text-transform"] = "none";
exports["text-size"] = medium["font-size-200"];
exports["margin-bottom"] = medium["size-150"];
