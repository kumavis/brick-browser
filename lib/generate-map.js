module.exports = generateMap;

function generateMap (arr) {
  if (!arr || !arr.length) return;

  var i = arr.length;
  var result = {};

  while (i--) {
    result[arr[i]._brick.meta.key] = arr[i];
  }

  return result;
}
