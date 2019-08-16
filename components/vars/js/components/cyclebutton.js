const lightest = require('../lightest.js');
const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const medium = require('../medium.js');
const dimensionGlobals = require('../dimensionGlobals.js');
exports["text-color"] = lightest["text-color"];
exports["icon-color"] = lightest["icon-color"];
exports["border-size"] = staticAliases["border-size-thin"];
exports["background-color"] = lightest["background-color-transparent"];
exports["border-color"] = lightest["border-color-transparent"];
exports["hold-icon-color"] = lightest["icon-color"];
exports["text-color-hover"] = lightest["text-color-hover"];
exports["icon-color-hover"] = lightest["icon-color-hover"];
exports["border-size-hover"] = staticAliases["border-size-thin"];
exports["background-color-hover"] = lightest["background-color-transparent"];
exports["border-color-hover"] = lightest["border-color-transparent"];
exports["hold-icon-color-hover"] = lightest["icon-color-hover"];
exports["text-color-down"] = lightest["text-color-down"];
exports["icon-color-down"] = lightest["icon-color-down"];
exports["border-size-down"] = staticAliases["border-size-thin"];
exports["background-color-down"] = lightest["gray-300"];
exports["border-color-down"] = lightest["gray-300"];
exports["hold-icon-color-down"] = lightest["icon-color-down"];
exports["text-color-key-focus"] = lightest["text-color-hover"];
exports["icon-color-key-focus"] = lightest["icon-color-focus"];
exports["border-size-key-focus"] = staticAliases["border-size-thick"];
exports["border-color-key-focus"] = lightest["border-color-focus"];
exports["background-color-key-focus"] = lightest["background-color-transparent"];
exports["hold-icon-color-key-focus"] = lightest["icon-color-hover"];
exports["text-color-mouse-focus"] = lightest["text-color-hover"];
exports["text-color-disabled"] = lightest["text-color-disabled"];
exports["icon-color-disabled"] = lightest["icon-color-disabled"];
exports["border-size-disabled"] = staticAliases["border-size-thin"];
exports["background-color-disabled"] = lightest["background-color-transparent"];
exports["border-color-disabled"] = lightest["border-color-transparent"];
exports["hold-icon-color-disabled"] = lightest["icon-color-disabled"];
exports["text-font-family"] = staticAliases["body-text-font-family"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = staticAliases["body-text-font-weight"];
exports["text-line-height"] = staticAliases["body-text-line-height"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-none"];
exports["text-transform"] = "none";
exports["text-size"] = medium["font-size-default"];
exports["icon-size"] = medium["workflow-icon-size"];
exports["text-baseline"] = medium["size-150"];
exports["height"] = medium["single-line-height"];
exports["min-width"] = medium["size-400"];
exports["border-radius"] = medium["border-radius-regular"];
exports["text-padding-x"] = medium["size-150"];
exports["icon-padding-x"] = medium["size-85"];
exports["icon-padding-y"] = medium["size-85"];
exports["hold-icon-padding-bottom"] = medium["size-40"];
exports["hold-icon-padding-right"] = medium["size-40"];
exports["hold-icon-size"] = medium["size-65"];
exports["touch-hit-x"] = dimensionGlobals["size-100"];
exports["touch-hit-y"] = dimensionGlobals["size-100"];
