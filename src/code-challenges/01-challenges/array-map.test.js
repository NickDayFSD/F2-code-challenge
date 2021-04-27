import { doubleNumbers, stringyNumbers } from './array-map.js';

test('take an array of numbers and double them', () => {
  const input = [2, 5, 100];
  const output = doubleNumbers(input);
  expect(output).toEqual([4, 10, 200]);
});

test('turn an array of numbers into strings', () => {
  const input = [2, 5, 100];
  const output = stringyNumbers(input);
  expect(output).toEqual(['2', '5', '100']);
});

// test('test description here', () => {
//   const input = [2, 5, 100];
//   const output = doubleNumbers(input);
//   expect(output).toEqual([4, 10, 200]);
// });

