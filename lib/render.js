var hyperglue = require("hyperglue");

module.exports = {
  body: body,
  template: template
};

function body (brick) {
  return template(brick, 'index');
}

function template (brick, name) {
  var source = brick.templates[name]();
  source = '<div>' + source + '</div>';

  var options = {};
  var key;
  for (key in brick.bindings) {
    options[key] = brick.bindings[key].options;
  }

  return hyperglue(source, options).children;
}
