import { doubleNumbers } from './array-map';

test('test description here', () => {
  const input = [2, 5, 100];
  const output = doubleNumbers(input);
  expect(output).toEqual([4, 10, 200]);
});