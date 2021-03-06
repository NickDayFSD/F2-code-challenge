import { stringyNumbers } from '../01-map/array-map';

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
  const shoppingList = [];
  for (let mItem of recipe.ingredients) {
    const item = mItem.split(' ').slice(2).join(' ');
    shoppingList.push(item);
  }
  return shoppingList;
}

export function stepActions(recipe) {
  const actions = [];
  for (let direction of recipe.steps) {
    actions.push(direction.split(' ')[0]);
  }
  return actions;
}

export function removeLastCharacters(str, num) {
  if (num >= 1) return str.slice(0, -num);
  return str;
}

// stretch goals 
export function totalSumCSV(str) {
  if (!str.includes(',')) {
    return Number(str);
  }
  return str.split(',').reduce((a, b) => Number(a) + Number(b));
}

export function removeVowels(str) {
  return str.replace(/a|e|i|o|u/g, '');
}

export function extractVowels(str) {
  const result = [];
  const vowels = str.match(/a|e|i|o|u/g);

  result.push(str.replace(/a|e|i|o|u/g, ''));
  result.push(vowels.sort().join(''));

  return result;
}