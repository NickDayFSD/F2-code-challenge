import {
  leastToGreatest,
  greatestToLeast,
  lengthSort,
  alphabetical,
  byAge
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

test('sort by length', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
  const output = lengthSort(input);
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']);
});

test('sorts words alphabetically', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
  const output = alphabetical(input);
  expect(output).toEqual(['by', 'dog', 'eaten', 'family', 'wolf']);
});

test('sort by age', () => {
  const input = [
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Arrogant Ambassador', age: 100 },
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Unlucky Swami', age: 77 }
  ];
  const output = byAge(input);
  expect(output).toEqual([
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Unlucky Swami', age: 77 },
    { name: 'Arrogant Ambassador', age: 100 }
  ]);
});
