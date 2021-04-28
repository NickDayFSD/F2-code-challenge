import {
  sortedKeys,
  getFilteredKey
} from './object-keys.js';

test('sorted keys by length', () => {
  const input = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
  const output = sortedKeys(input);
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']);
});

test('return single object key', () => {
  const input = { name: 'Angelina Jolie', isSpot: false, age: 80, };
  const output = getFilteredKey(input);
  expect(output).toEqual(['age']);
});