/* exported getWords */
function getWords(string) {
  if (string === '') {
    const emptyString = string.split(string);
    return emptyString;
  } else {
    const stringArray = string.split(' ');
    return stringArray;
  }
}
