import {
  evensOnly,
  fiveCharactersOrFewerOnly,
  peopleWhoBelongToTheIlluminati
} from './array-filter';

test('Even numbers only', () => {
  const input = [3, 6, 8, 2];
  const output = evensOnly(input);
  expect(output).toEqual([6, 8, 2]);
});

test('five characters or fewer', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping'];
  const output = fiveCharactersOrFewerOnly(input);
  expect(output).toEqual(expect.arrayContaining(['by', 'dog', 'wolf', 'eaten']));
});

test('illuminati', () => {
  const input = [
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true }
  ];
  const output = peopleWhoBelongToTheIlluminati(input);
  expect(output).toEqual([
    { name: 'Angelina Jolie', member: true },
    { name: 'Paris Hilton', member: true },
    { name: 'Bob Ziroll', member: true }
  ]);
});