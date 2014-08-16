var Struct = require("new-struct");
var methods = require("./lib/methods");

var Brick = Struct(methods);

module.exports = Brick;
module.exports.create = require('./lib/create-class');
module.exports.setup = require('./lib/setup');
module.exports.generateMap = require('./lib/generate-map');
