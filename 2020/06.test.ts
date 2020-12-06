import {part1, part2} from './06';

describe('Day 6', () => {
  test('Part 1', () => {
    expect(
      part1([
        'abc',
        `a
b
c`,
        `ab
ac`,
        `a
a
a
a`,
        `b`,
      ])
    ).toEqual(11);
  });

  test('Part 2', () => {
    expect(
      part2([
        'abc',
        `a
b
c`,
        `ab
ac`,
        `a
a
a
a`,
        `b`,
      ])
    ).toEqual(6);
  });
});
