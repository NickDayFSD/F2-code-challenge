import {
  toLastNames,
  addValues,
  addPurchases
} from './reduce.js';

test('Collects names into an array', () => {
  const input = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];
  const output = toLastNames(input);
  expect(output).toEqual(['Jane Doe', 'James Bond']);
});

test('Adds all values in the array', () => {
  const input = [1, 2, 5, 3];
  const output = addValues(input);
  expect(output).toEqual(11);
});

test('Totals spending on objects in array', () => {
  const input = [{
    item: 'switch',
    purchasePrice: 399
  },
  {
    item: 'switch',
    purchasePrice: 399
  },
  {
    item: 'switch',
    purchasePrice: 399
  }];
  const output = addPurchases(input);
  expect(output).toEqual(1197);
});