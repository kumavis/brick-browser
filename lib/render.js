var hyperglue = require("hyperglue");

module.exports = {
  body: body,
  template: template
};

function body (brick) {
  return template(brick, brick.defaultTemplate || brick.defaultTemplateName);
}

function template (brick, name) {
  var template = findTemplate(brick, name);

  if (!template) return [];

  var source = '<div>' + template() + '</div>';

  var options = {};
  var key;
  for (key in brick.bindings) {
    options[key] = brick.bindings[key].options;
  }

  return hyperglue(source, options).children;
}

function findTemplate (brick, name) {
  if (brick.templates[name]) return brick.templates[name];
  if (!brick.mixings) return;

  var i = -1;
  var len = brick.mixings.length;
  var found;
  while (++i < len) {
    found = findTemplate(brick.mixings[i], name);
    if (found) return found;
  }
}
