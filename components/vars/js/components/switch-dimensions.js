const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const medium = require('../medium.js');
const dimensionGlobals = require('../dimensionGlobals.js');
const switch-dimensions = exports;
exports["text-font-family"] = staticAliases["body-text-font-family"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = fontGlobals["weight-regular"];
exports["text-line-height"] = staticAliases["body-text-line-height"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-none"];
exports["text-transform"] = "none";
exports["text-size"] = medium["dimensionAliases"].["font-size-default"];
exports["handle-border-size"] = staticAliases["border-size-thick"];
exports["track-width"] = "26px";
exports["handle-size"] = medium["size-175"];
exports["text-gap"] = medium["size-125"];
exports["track-height"] = medium["size-175"];
exports["handle-border-radius"] = "7px";
exports["height"] = medium["size-400"];
exports["text-baseline"] = medium["font-size-75"];
exports["cursor-hit-x"] = medium["size-100"];
exports["touch-hit-x"] = medium["size-100"];
exports["touch-hit-y"] = dimensionGlobals["size-100"];
