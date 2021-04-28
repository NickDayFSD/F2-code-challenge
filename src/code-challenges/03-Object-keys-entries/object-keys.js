export function sortedKeys(obj) {
  const keys = Object.keys(obj);
  return keys.sort((a, b) => {
    return a.length - b.length;
  });
}