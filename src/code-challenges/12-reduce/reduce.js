export const toLastNames = people => {
  const names = people.map(Object.values);
  const result = [];
  for (let person of names) {
    result.push(person.join().replace(',', ' '));
  }
  return result;
};

export const addValues = arr => {
  return arr.reduce((a, b) => a + b);
};

export const addPurchases = arr => {
  const spending = arr.map(obj => {
    return obj.purchasePrice;
  });
  return spending.reduce((a, b) => a + b);
};

export const countNumberOfElements = arr => {
  let count = 0;
  arr.forEach(() => count++);
  return count;
};