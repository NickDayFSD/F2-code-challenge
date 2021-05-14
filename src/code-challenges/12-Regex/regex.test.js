import {
  sortByChildren,
  containsW,
  isNum,
  containsWorld
} from './regex.js';

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

test('It should sort the characters by number of children', () => {
  expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
  expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
});

test('returns true when lowercase w is found in string', () => {
  expect(containsW('hello world')).toBe(true);
  expect(containsW('Hello World')).toBe(false);
  expect(containsW('hello everyone')).toBe(false);
});

test('numbers true/false', () => {
  expect(isNum(1234567890)).toBe(true);
  expect(isNum('12345')).toBe(true);
  expect(isNum('h3llo w0rld')).toBe(true);
  expect(isNum('hello world')).toBe(false);
  expect(isNum('')).toBe(false);
});

test('test notes here', () => {
  expect(containsWorld('hello world')).toBe(true);
  expect(containsWorld('Hello World')).toBe(false);
  expect(containsWorld('hello everyone')).toBe(false);
});