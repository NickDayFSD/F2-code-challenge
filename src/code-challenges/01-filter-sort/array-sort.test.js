import {
  leastToGreatest,
  greatestToLeast
} from './array-sort.js';

test('sort lowest to greatest', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const output = leastToGreatest(input);
  expect(output).toEqual([1, 2, 3, 5, 20, 90]);
});

test('sort greatest to lowest', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const output = greatestToLeast(input);
  expect(output).toEqual([90, 20, 5, 3, 2, 1]);
});

