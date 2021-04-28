export function evensOnly(arr) {
  return arr.filter(num => num % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(word => word.length < 6);
}

export function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter(member => member.member === true);
}