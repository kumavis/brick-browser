var domquery = require("domquery");
var render = require("./render");

module.exports = {
  setup: setup,
  update: update
};

function setup (brick) {
  if (brick.element) return;

  var id, element;

  if (brick.dom) {
    id = brick.dom.id.splice(0, 1)[0];
    element = document.getElementById(id);
    brick.id = id;
  } else {
    element = document.createElement('div');
    element.setAttribute('id', brick.id);
  }

  brick.element = domquery(element);
}

function update (brick) {
  var replace = Array.prototype.slice.call(render.body(brick));
  var current = Array.prototype.slice.call(brick.element[0].children);
  var parent = brick.element[0];

  var i = -1;
  var len = replace.length;
  var dirty;

  while (++i < len) {
    if (current && current[i].isEqualNode(replace[i])) continue;

    dirty = !current
      || current[i].children.length != replace[i].children.length
      || current[i].outerHTML != replace[i].outerHTML;

    if (!dirty) continue;

    if (!current || !current[i]) return parent.appendChild(replace[i]);

    parent.replaceChild(replace[i], current[i]);
  }
}
