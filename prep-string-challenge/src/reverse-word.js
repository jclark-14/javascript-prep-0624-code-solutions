/* exported reverseWord */
function reverseWord(word) {
  let reversedWord = '';
  for (index = word.length - 1; index >= 0; index--) {
    reversedWord += word[index];
  }
  return reversedWord;
}
