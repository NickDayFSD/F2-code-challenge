import {
  sortedKeys
} from './object-keys.js';

test('test notes here', () => {
  const input = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
  const output = sortedKeys(input);
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']);
});