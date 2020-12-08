import {part1, part2} from './03';

describe('Day 3', () => {
  test('Part 1', () => {
    expect(part1('>')).toEqual(2);
    expect(part1('^>v<')).toEqual(4);
    expect(part1('^v^v^v^v^v')).toEqual(2);
  });

  test('Part 2', () => {
    expect(part2('^>v<')).toEqual(3);
  });
});
