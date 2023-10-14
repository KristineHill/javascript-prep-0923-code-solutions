/* exported tail */

function tail(array) {
  const allAfterFirst = [];
  let k = 0;
  for (let i = 1; i < array.length; i++) {
    allAfterFirst[k] = array[i];
    k++;
  }

  return allAfterFirst;
}
