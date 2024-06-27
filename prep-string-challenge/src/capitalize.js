/* exported capitalize */
function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const letters = word.slice(1);
  const lowerLetters = letters.toLowerCase();
  const resultWord = firstLetter + lowerLetters;
  return resultWord;
}
