/* exported compact */
function compact(array) {
  const newArray = [];
  for (index = 0; index < array.length; index++) {
    if (!array[index] === false) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}
