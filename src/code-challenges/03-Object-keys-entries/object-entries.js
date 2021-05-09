export function getArrayOfKeysAndValues(obj) {
  return Object.entries(obj);
}

export function sortedArraysByValuesLength(obj) {
  return Object.entries(obj).sort((a, b) => {
    return b[1].length - a[1].length;
  });
}