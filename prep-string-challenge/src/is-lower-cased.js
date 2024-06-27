/* exported isLowerCased */
function isLowerCased(word) {
  const allLowerCase = word.toLowerCase();
  if (allLowerCase === word) {
    return true;
  } else {
    return false;
  }
}
