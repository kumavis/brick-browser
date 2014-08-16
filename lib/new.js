var format = require("format-text");
var filenameId = require("filename-id");
var pubsub = require("pubsub");

var instanceCounter = 1;

module.exports = New;

function New (options) {
  var Brick = require('../');
  var id;

  options || (options = {});

  var brick = Brick(options);

  brick.isBrick = true;
  brick.templates = {};
  brick.id = 'brick-' + brick.key + '-' + (instanceCounter++);

  var key;
  for (key in brick.source.html) {
    id = filenameId(key);
    brick.templates[id] = template(brick.source.html[key]);
  }

  brick.onReady = pubsub();
  brick.onError = pubsub();
  brick.browser = true;

  return brick;
}

function template (source) {
  t.returnsTemplate = true;

  return t;

  function t () {
    return source;
  }
}
