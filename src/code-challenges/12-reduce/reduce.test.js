import {
  toLastNames,
  addValues,
  addPurchases,
  countNumberOfElements,
  returnNames
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
    item: 'red switch',
    purchasePrice: 399
  },
  {
    item: 'blue switch',
    purchasePrice: 399
  },
  {
    item: 'pokemon switch',
    purchasePrice: 399
  }];
  const output = addPurchases(input);
  expect(output).toEqual(1197);
});

test('Gets .length without .length', () => {
  const input = ['just', 1, 'more', { counter: 'counter' }];
  const output = countNumberOfElements(input);
  expect(output).toEqual(input.length);
});

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

test('test notes here', () => {
  const input = [
    'Luke Skywalker',
    'C-3PO',
    'R2-D2',
    'Darth Vader',
    'Leia Organa'
  ];
  const output = returnNames(starWarsData);
  expect(output).toEqual(input);
});