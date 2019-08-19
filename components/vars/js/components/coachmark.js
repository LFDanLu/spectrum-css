const darkest = require('../darkest.js');
const large = require('../large.js');
const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const dimensionGlobals = require('../dimensionGlobals.js');
const animationGlobals = require('../animationGlobals.js');
exports["indicator-ring-default-color"] = darkest["focus-color"];
exports["indicator-ring-low-contrast-color"] = darkest["gray-50"];
exports["indicator-ring-high-contrast-color"] = darkest["gray-900"];
exports["background-color"] = darkest["gray-50"];
exports["shadow-color"] = darkest["dropshadow-color"];
exports["border-color"] = darkest["border-color-dark"];
exports["title-text-color"] = darkest["title-text-color"];
exports["content-text-color"] = darkest["text-color"];
exports["step-text-color"] = darkest["label-text-color"];
exports["min-width"] = large["size-3400"];
exports["max-width"] = large["size-5000"];
exports["padding-x"] = large["size-300"];
exports["padding-y"] = large["size-300"];
exports["border-radius"] = large["size-50"];
exports["title-margin-bottom"] = large["size-200"];
exports["content-margin-bottom"] = large["size-200"];
exports["indicator-gap"] = large["size-75"];
exports["step-margin-left"] = large["size-200"];
exports["border-size"] = staticAliases["border-size-thin"];
exports["title-text-size"] = large["font-size-200"];
exports["title-text-font-weight"] = fontGlobals["weight-bold"];
exports["title-text-line-height"] = staticAliases["heading-text-line-height"];
exports["content-text-size"] = large["font-size-100"];
exports["content-text-font-weight"] = fontGlobals["weight-regular"];
exports["content-text-line-height"] = staticAliases["body-text-line-height"];
exports["step-text-size"] = large["font-size-100"];
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
exports["shadow-blur"] = large["dropshadow-blur"];
exports["shadow-offset-y"] = large["dropshadow-offset-y"];
exports["indicator-ring-diameter"] = large["size-100"];
exports["animation-inticator-ring-inner-delay-multiple"] = "-0.33";
exports["animation-inticator-ring-center-delay-multiple"] = "-0.66";
exports["animation-indicator-keyframe-0-scale"] = "0.8";
exports["indicator-entry-animation-delay"] = "0";
exports["indicator-entry-animation-duration"] = animationGlobals["duration-800"];
exports["indicator-entry-animation-ease"] = animationGlobals["ease-out"];
exports["indicator-entry-animation-properties"] = "opacity";
exports["entry-animation-delay"] = animationGlobals["duration-300"];
exports["entry-animation-duration"] = animationGlobals["duration-400"];
exports["entry-animation-distance"] = large["size-75"];
exports["entry-animation-ease"] = animationGlobals["ease-out"];
exports["entry-animation-properties"] = "opacity, distance";
exports["indicator-exit-animation-delay"] = "0";
exports["indicator-exit-animation-duration"] = animationGlobals["duration-800"];
exports["indicator-exit-animation-ease"] = animationGlobals["ease-in"];
exports["indicator-exit-animation-properties"] = "opacity";
exports["exit-animation-delay"] = animationGlobals["duration-100"];
exports["exit-animation-duration"] = animationGlobals["duration-100"];
exports["exit-animation-distance"] = large["size-75"];
exports["exit-animation-ease"] = animationGlobals["ease-in"];
exports["exit-animation-properties"] = "opacity, distance";
