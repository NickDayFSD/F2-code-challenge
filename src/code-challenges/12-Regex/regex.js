export function sortByChildren(charArray) {
  return charArray.sort((a, b) => {
    return a.children.length - b.children.length || a.house + b.house;
  });
}

export const containsW = (str) => {
  if (str.match(/([w])\w/g)) {
    return true;
  }
  return false;
};

export const isNum = (input) => {
  return /\d/.test(input);
};