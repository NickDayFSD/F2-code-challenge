import {
  evensOnly
} from './array-filter';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2];
  const output = evensOnly(input);
  expect(output).toEqual([6, 8, 2]);
});