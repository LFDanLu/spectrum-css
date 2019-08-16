const lightest = require('../lightest.js');
const dimensionGlobals = require('../dimensionGlobals.js');
const medium = require('../medium.js');
exports["content-background-color"] = lightest["gray-100"];
exports["handle-background-color"] = lightest["gray-300"];
exports["handle-background-color-hover"] = lightest["gray-400"];
exports["handle-background-color-down"] = lightest["gray-800"];
exports["content-width"] = "304px";
exports["handle-width"] = dimensionGlobals["size-25"];
exports["gripper-width"] = dimensionGlobals["size-50"];
exports["gripper-height"] = dimensionGlobals["size-200"];
exports["gripper-border-width-vertical"] = "4px";
exports["gripper-border-width-horizontal"] = "3px";
exports["gripper-border-radius"] = medium["border-radius-small"];
