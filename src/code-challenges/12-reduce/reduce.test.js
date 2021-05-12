import {
  toLastNames
} from './reduce.js';

test('test notes here', () => {
  const input = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];
  const output = toLastNames(input);
  expect(output).toEqual(['Jane Doe', 'James Bond']);
});