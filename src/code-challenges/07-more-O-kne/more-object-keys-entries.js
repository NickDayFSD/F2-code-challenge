export function getHouses(arr) {
  return arr.map(house => {
    return house.house;
  });
}

export function makeArray(obj) { // updateNumbers is a stupid name
  const array = [];
  Object.entries(obj).forEach((n, index) => array.push(n[0] + ': ' + n[1]));
  return array;
}

