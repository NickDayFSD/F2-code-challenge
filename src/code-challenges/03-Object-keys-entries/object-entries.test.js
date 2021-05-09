import {
  getArrayOfKeysAndValues,
  sortedArraysByValuesLength
} from './object-entries.js';

test('test notes here', () => {
  const input = { name: 'Angelina Jolie', age: 80 };
  const output = getArrayOfKeysAndValues(input);
  expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]);
});

test('test notes here', () => {
  const input = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' };
  const output = sortedArraysByValuesLength(input);
  expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]);
});