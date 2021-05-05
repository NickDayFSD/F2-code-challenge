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
  let charCount = [];
  let trueCount = 0;
  // loop through array
  for (let obj of arr) {
    delete obj.house;
    trueCount += obj.children.length;
    delete obj.children;
    const values = Object.values(obj);
    for (let name of values) {
      if (name !== null) {
        charCount.push(name);
      }
    }
    trueCount += charCount.length;
  }
  return trueCount;
  // count all values
}