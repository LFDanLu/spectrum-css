const darkest = require('../darkest.js');
const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const large = require('../large.js');
exports["text-color"] = darkest["text-color"];
exports["text-color-disabled"] = darkest["text-color-disabled"];
exports["dot-color-disabled"] = darkest["gray-400"];
exports["dot-color-label-celery"] = darkest["celery-400"];
exports["dot-color-label-chartreuse"] = darkest["chartreuse-400"];
exports["dot-color-label-yellow"] = darkest["yellow-400"];
exports["dot-color-label-magenta"] = darkest["magenta-400"];
exports["dot-color-label-fuchsia"] = darkest["fuchsia-400"];
exports["dot-color-label-purple"] = darkest["purple-400"];
exports["dot-color-label-indigo"] = darkest["indigo-400"];
exports["dot-color-label-seafoam"] = darkest["seafoam-400"];
exports["text-font-family"] = staticAliases["body-text-font-family"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = staticAliases["body-text-font-weight"];
exports["text-line-height"] = staticAliases["body-text-line-height"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-none"];
exports["text-transform"] = "none";
exports["text-size"] = large["font-size-default"];
exports["height"] = large["single-line-height"];
exports["text-gap"] = large["size-150"];
exports["dot-size"] = large["size-100"];
exports["dot-color"] = darkest["green-400"];
