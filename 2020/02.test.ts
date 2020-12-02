import {parsePassword, part1, part2} from './02';

describe('Day 2', () => {
  test('parsePassword', () => {
    expect(parsePassword('9-13 g: dgggggcgrrggggggg')).toEqual({
      num1: 9,
      num2: 13,
      letter: 'g',
      password: 'dgggggcgrrggggggg',
    });
  });

  test('Part 1', () => {
    expect(
      part1([
        parsePassword('1-3 a: abcde'),
        parsePassword('1-3 b: cdefg'),
        parsePassword('2-9 c: ccccccccc'),
      ])
    ).toEqual(2);
  });

  test('Part 2', () => {
    expect(part2([parsePassword('1-3 a: abcde')])).toEqual(1);
    expect(part2([parsePassword('1-3 b: cdefg')])).toEqual(0);
    expect(part2([parsePassword('2-9 c: ccccccccc')])).toEqual(0);
  });
});
