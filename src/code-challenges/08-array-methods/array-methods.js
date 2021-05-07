export function howMuchPencil(str) {
  const strArray = [str];
  let sharp = str;
  for (let i = 0; i < str.length; i++) {
    sharp = sharp.slice(1);
    strArray.push(sharp);
  }
  return strArray;
}

export function wordsToCharList(str) {
  const chars = str.split('');
  return chars;
}

export function listFoods(recipe) {

}

export function stepActions(recipe) {

}

export function removeLastCharacters(str, numberOfCharacters) {

}

// stretch goals 
export function totalSumCSV(str) {

}

export function removeVowels(str) {

}

export function extractVowels(str) {

}