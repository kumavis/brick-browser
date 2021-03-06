var Struct = require("new-struct");

module.exports = createClass;

function createClass (embedding, mixing) {
  var Brick = require('../');
  var Mixed = Struct(Brick, {
    New: New
  });

  return Mixed;

  function New (options) {
    options || (options = {});

    options.title = embedding._brick.meta.title;
    options.key = embedding._brick.meta.key;
    options.assetsDir = embedding._brick.meta.assetsDir;
    options.source = embedding._brick.meta.source;
    options.name = embedding._brick.meta.name;

    return Brick.New(options);
  };
}
