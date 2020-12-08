import {parsePresent, part1, part2} from './02';

describe('Day 2', () => {
  test('Part 1', () => {
    expect(part1([parsePresent('2x3x4')])).toEqual(58);
    expect(part1([parsePresent('1x1x10')])).toEqual(43);
  });

  test('Part 2', () => {
    expect(part2([parsePresent('2x3x4')])).toEqual(34);
    expect(part2([parsePresent('1x1x10')])).toEqual(14);
  });
});
