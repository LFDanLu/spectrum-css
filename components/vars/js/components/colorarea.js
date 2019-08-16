const lightest = require('../lightest.js');
const staticAliases = require('../staticAliases.js');
const medium = require('../medium.js');
exports["border-color"] = "rgba(50,50,50,0.1)";
exports["border-color-hover"] = "rgba(50,50,50,0.1)";
exports["border-color-down"] = "rgba(50,50,50,0.1)";
exports["border-color-key-focus"] = "rgba(50,50,50,0.1)";
exports["border-color-disabled"] = lightest["gray-300"];
exports["fill-color-disabled"] = lightest["gray-300"];
exports["border-size"] = staticAliases["border-size-thin"];
exports["border-radius"] = medium["border-radius-regular"];
exports["default-width"] = medium["size-2400"];
exports["default-height"] = medium["size-2400"];
exports["min-width"] = medium["size-800"];
exports["min-height"] = medium["size-800"];
exports["cursor-hit-x"] = medium["size-100"];
exports["cursor-hit-y"] = medium["size-100"];
exports["touch-hit-x"] = medium["size-100"];
exports["touch-hit-y"] = medium["size-100"];
