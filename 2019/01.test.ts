import {part1, part2} from './01';

describe('Day 01', () => {
  test('Part 1', () => {
    const result = part1([12, 14, 1969, 100756]);
    expect(result).toEqual(34241);
  });

  test('Part 2', () => {
    const result = part2([100756]);
    expect(result).toEqual(50346);
  });
});
