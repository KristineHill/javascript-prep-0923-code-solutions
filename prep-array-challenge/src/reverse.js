/* exported reverse */

function reverse(array) {
  const reversedArray = [];

  for (let i = 0; i < array.length; i++) {
    reversedArray[i] = array[array.length - i - 1];
  }
  return reversedArray;
}
