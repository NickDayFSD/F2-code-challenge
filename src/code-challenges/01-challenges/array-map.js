function doubleNum(x) {
  return x * 2;
}

function stringNum(x) {
  return JSON.stringify(x);
}

function capName(x) {
  return x.toUpperCase();
}

export function doubleNumbers(arr) {
  return arr.map(doubleNum);
}

export function stringyNumbers(arr) {
  return arr.map(stringNum);
}

export function capitalizeNames(arr) {
  return arr.map(capName);
}