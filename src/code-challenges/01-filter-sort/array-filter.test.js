import {
  evensOnly,
  fiveCharactersOrFewerOnly
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
