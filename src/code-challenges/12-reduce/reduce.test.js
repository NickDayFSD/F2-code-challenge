import {
  toLastNames,
  addValues
} from './reduce.js';

test('test notes here', () => {
  const input = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];
  const output = toLastNames(input);
  expect(output).toEqual(['Jane Doe', 'James Bond']);
});

test('test notes here', () => {
  const input = [1, 2, 5, 3];
  const output = addValues(input);
  expect(output).toEqual(11);
});