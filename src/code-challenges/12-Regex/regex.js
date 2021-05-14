export function sortByChildren(charArray) {
  return charArray.sort((a, b) => {
    return a.children.length - b.children.length || a.house + b.house;
  });
}