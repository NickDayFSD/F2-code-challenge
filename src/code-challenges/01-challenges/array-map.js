function doubleNum(x) {
  return x * 2;
}
export function doubleNumbers(arr) {
  return arr.map(doubleNum);
}

function stringNum(x) {
  return JSON.stringify(x);
}
export function stringyNumbers(arr) {
  return arr.map(stringNum);
}

function capName(x) {
  const lower = x.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
export function capitalizeNames(arr) {
  return arr.map(capName);
}

function grabName(object) {
  return object.name;
}
export function namesOnly(arr) {
  return arr.map(grabName);
}

function checkMovie(object) {
  if (object.age < 18) {
    return `${object.name} is under age!!`;
  } else {
    return `${object.name} can go to The Matrix`;
  }
}
export function makeStrings(arr) {
  return arr.map(checkMovie);
}

function prepareForDOM(object) {
  return `<h1>${object.name}</h1><h2>${object.age}</h2>`;
}
export function readyToPutInTheDOM(arr) {
  return arr.map(prepareForDOM);
}
