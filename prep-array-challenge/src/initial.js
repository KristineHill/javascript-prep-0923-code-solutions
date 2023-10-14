/* exported initial */

function initial(array) {
  const allExceptLast = [];
  let k = 0;
  for (let i = 0; i < array.length - 1; i++) {
    allExceptLast[k] = array[i];
    k++;
  }

  return allExceptLast;
}
