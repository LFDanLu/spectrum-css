const lightest = require('../lightest.js');
const dimensionGlobals = require('../dimensionGlobals.js');
const medium = require('../medium.js');
const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const animationGlobals = require('../animationGlobals.js');
exports["background-color"] = lightest["background-color-default"];
exports["underlay-background-color"] = lightest["background-color-modal-overlay"];
exports["icon-color"] = lightest["red-600"];
exports["rule-color"] = lightest["gray-200"];
exports["title-text-color"] = lightest["red-600"];
exports["content-text-color"] = lightest["gray-800"];
exports["width"] = "90%";
exports["min-width"] = dimensionGlobals["size-3600"];
exports["max-width"] = dimensionGlobals["size-6000"];
exports["icon-margin-left"] = dimensionGlobals["size-300"];
exports["rule-height"] = dimensionGlobals["size-25"];
exports["rule-margin-top"] = dimensionGlobals["size-150"];
exports["rule-margin-bottom"] = dimensionGlobals["size-200"];
exports["rule-border-radius"] = dimensionGlobals["size-10"];
exports["title-text-size"] = medium["font-size-300"];
exports["title-text-line-height"] = staticAliases["heading-text-line-height"];
exports["title-text-font-weight"] = fontGlobals["weight-bold"];
exports["content-text-size"] = medium["font-size-100"];
exports["content-text-font-weight"] = fontGlobals["weight-regular"];
exports["padding"] = dimensionGlobals["size-500"];
exports["border-radius"] = medium["size-50"];
exports["content-margin-bottom"] = dimensionGlobals["size-600"];
exports["icon-height"] = medium["size-225"];
exports["icon-width"] = medium["size-225"];
exports["button-gap"] = dimensionGlobals["size-200"];
exports["buttongroup-gap-x"] = dimensionGlobals["size-200"];
exports["buttongroup-gap-y"] = dimensionGlobals["size-200"];
exports["content-text-line-height"] = staticAliases["body-text-line-height"];
exports["animation-distance"] = dimensionGlobals["size-100"];
exports["background-entry-animation-delay"] = "0";
exports["background-entry-animation-duration"] = animationGlobals["duration-600"];
exports["background-entry-animation-ease"] = animationGlobals["linear"];
exports["background-entry-animation-properties"] = "opacity";
exports["entry-animation-delay"] = animationGlobals["duration-200"];
exports["entry-animation-duration"] = animationGlobals["duration-500"];
exports["entry-animation-ease"] = animationGlobals["ease-out"];
exports["entry-animation-distance"] = medium["size-250"];
exports["entry-animation-properties"] = "opacity, distance";
exports["background-exit-animation-delay"] = animationGlobals["duration-200"];
exports["background-exit-animation-duration"] = animationGlobals["duration-300"];
exports["background-exit-animation-ease"] = animationGlobals["linear"];
exports["background-exit-animation-properties"] = "opacity";
exports["exit-animation-delay"] = "0";
exports["exit-animation-duration"] = animationGlobals["duration-100"];
exports["exit-animation-ease"] = animationGlobals["ease-in"];
exports["exit-animation-distance"] = "0";
exports["exit-animation-properties"] = "opacity, distance";
