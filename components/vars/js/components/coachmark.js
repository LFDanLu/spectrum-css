const medium = require('../medium.js');
const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const dimensionGlobals = require('../dimensionGlobals.js');
const animationGlobals = require('../animationGlobals.js');
const coachmark = exports;
exports["min-width"] = medium["size-3400"];
exports["max-width"] = medium["size-5000"];
exports["padding-x"] = medium["size-300"];
exports["padding-y"] = medium["size-300"];
exports["border-radius"] = medium["size-50"];
exports["title-margin-bottom"] = medium["size-200"];
exports["content-margin-bottom"] = medium["size-200"];
exports["indicator-gap"] = medium["size-75"];
exports["step-margin-left"] = medium["size-200"];
exports["border-size"] = staticAliases["border-size-thin"];
exports["title-text-size"] = medium["font-size-200"];
exports["title-text-font-weight"] = fontGlobals["weight-bold"];
exports["title-text-line-height"] = staticAliases["heading-text-line-height"];
exports["content-text-size"] = medium["font-size-100"];
exports["content-text-font-weight"] = fontGlobals["weight-regular"];
exports["content-text-line-height"] = staticAliases["body-text-line-height"];
exports["step-text-size"] = medium["font-size-100"];
exports["step-text-font-weight"] = fontGlobals["weight-regular"];
exports["step-text-line-height"] = staticAliases["body-text-line-height"];
exports["indicator-ring-border-size"] = dimensionGlobals["size-25"];
exports["animation-indicator-ring-duration"] = "3000ms";
exports["animation-indicator-ring-ease"] = animationGlobals["linear"];
exports["animation-inticator-ring-outer-delay-multiple"] = "-1";
exports["animation-indicator-keyframe-0-opacity"] = "0";
exports["animation-indicator-keyframe-50-scale"] = "1.5";
exports["animation-indicator-keyframe-50-opacity"] = "0.6";
exports["animation-indicator-keyframe-100-scale"] = "2";
exports["animation-indicator-keyframe-100-opacity"] = "0";
exports["shadow-blur"] = medium["dimensionAliases"].["dropshadow-blur"];
exports["shadow-offset-y"] = medium["dimensionAliases"].["dropshadow-offset-y"];
exports["indicator-ring-diameter"] = medium["size-100"];
exports["animation-inticator-ring-center-delay-multiple"] = "-0.66";
exports["animation-inticator-ring-inner-delay-multiple"] = "-0.33";
exports["animation-indicator-keyframe-0-scale"] = "0.8";
