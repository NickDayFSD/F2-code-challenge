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