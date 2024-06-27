/* exported isVowel */
function isVowel(char) {
  const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  const charSearch = vowels.indexOf(char, 0);
  if (charSearch >= 0) {
    return true;
  } else {
    return false;
  }
}
