const fontGlobals = require('../fontGlobals.js');
const medium = require('../medium.js');
const staticAliases = require('../staticAliases.js');
const dimensionGlobals = require('../dimensionGlobals.js');
const fieldbutton = exports;
exports["placeholder-text-font-style"] = fontGlobals["style-italic"];
exports["placeholder-text-font-weight"] = fontGlobals["weight-regular"];
exports["placeholder-text-size"] = medium["font-size-100"];
exports["text-font-family"] = staticAliases["body-text-font-family"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = fontGlobals["weight-regular"];
exports["text-line-height"] = staticAliases["body-text-line-height"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-none"];
exports["text-transform"] = "none";
exports["text-size"] = medium["dimensionAliases"].["font-size-default"];
exports["icon-size"] = medium["dimensionAliases"].["workflow-icon-size"];
exports["border-size"] = staticAliases["border-size-thin"];
exports["border-size-focus"] = staticAliases["border-size-thick"];
exports["ui-icon-height"] = "6px";
exports["ui-icon-width"] = dimensionGlobals["size-125"];
exports["height"] = medium["size-400"];
exports["min-width"] = medium["size-225"];
exports["padding-x"] = "0px";
exports["border-radius"] = "0px";
exports["affixed-border-radius"] = "0";
exports["label-gap-x"] = medium["size-150"];
exports["label-gap-y"] = "0px";
exports["asterisk-size"] = medium["size-100"];
exports["asterisk-gap"] = medium["size-50"];
exports["text-baseline"] = medium["size-150"];
exports["icon-gap"] = medium["size-100"];
exports["icon-margin-left"] = medium["size-150"];
exports["icon-padding-y"] = medium["size-85"];
exports["success-icon-height"] = medium["size-150"];
exports["success-icon-width"] = medium["size-150"];
exports["error-icon-height"] = medium["size-225"];
exports["error-icon-width"] = medium["size-225"];
exports["affixed-border-size"] = dimensionGlobals["size-10"];
