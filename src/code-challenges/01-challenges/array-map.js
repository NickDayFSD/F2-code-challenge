function doubleNum(x) {
  return x * 2;
}

function stringNum(x) {
  return JSON.stringify(x);
}

export function doubleNumbers(arr) {
  return arr.map(doubleNum);
}

export function stringyNumbers(arr) {
  return arr.map(stringNum);
}