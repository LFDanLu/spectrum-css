const colorGlobals = require('../colorGlobals.js');
const darkest = require('../darkest.js');
const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const large = require('../large.js');
exports["gray-background-color"] = colorGlobals["static-gray-700"];
exports["green-background-color"] = colorGlobals["static-green-600"];
exports["blue-background-color"] = colorGlobals["static-blue"];
exports["red-background-color"] = colorGlobals["static-red-600"];
exports["seafoam-background-color"] = darkest["seafoam-400"];
exports["fuchsia-background-color"] = darkest["fuchsia-400"];
exports["orange-background-color"] = colorGlobals["static-orange-600"];
exports["yellow-background-color"] = darkest["yellow-400"];
exports["text-color"] = colorGlobals["static-white"];
exports["background-color-disabled"] = darkest["gray-200"];
exports["text-color-disabled"] = colorGlobals["static-white"];
exports["text-font-family"] = staticAliases["body-text-font-family"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = fontGlobals["weight-regular"];
exports["text-line-height"] = large["line-height-large"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-none"];
exports["text-transform"] = "none";
exports["text-size"] = large["font-size-200"];
exports["margin-bottom"] = large["size-150"];
