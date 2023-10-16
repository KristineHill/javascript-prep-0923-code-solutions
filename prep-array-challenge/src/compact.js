/* exported compact */

function compact(array) {
  const removed = [];
  for (let i = 0, len = array.length; i < len; i++) {
    if (array[i]) removed.push(array[i]);
  }
  return removed;
}
