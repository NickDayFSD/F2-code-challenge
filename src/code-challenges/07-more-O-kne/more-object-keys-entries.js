export function getHouses(arr) {
  return arr.map(house => {
    return house.house;
  });
}

export function makeArray(obj) { // updateNumbers is a stupid name
  const array = [];
  Object.entries(obj).forEach(n => array.push(n[0] + ': ' + n[1]));
  return array;
}

export function totalCharacters(arr) {
  let count = 0;

  Object.values(arr).forEach(character => {
    count++;
    if (character.spouse) count++;
    count += character.children.length;
  });

  return count;
}

export function hasChildrenEntries(arr, character) {
  // loop through array
  let hasChildren;
  Object.values(arr).forEach(lord => {
    if (lord.name === character) {
      if (lord.children.length > 0) {
        return hasChildren = true;
      } else {
        return hasChildren = false;
      }
    }
  });
  return hasChildren;
}