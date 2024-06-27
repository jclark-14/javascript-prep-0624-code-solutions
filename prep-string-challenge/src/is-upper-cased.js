/* exported isUpperCased */
function isUpperCased(word) {
  const allUpperCase = word.toUpperCase();
  if (allUpperCase === word) {
    return true;
  } else {
    return false;
  }
}
