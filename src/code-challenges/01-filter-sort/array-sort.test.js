import {
  leastToGreatest
} from './array-sort.js';

test('test notes here', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const output = leastToGreatest(input);
  expect(output).toEqual([1, 2, 3, 5, 20, 90]);
});