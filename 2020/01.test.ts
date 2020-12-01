import {part1, part2} from './01';

describe('Day 01', () => {
  test('Part 1', () => {
    const result = part1([1721, 979, 366, 299, 675, 1456]);
    expect(result).toEqual(514579);
  });

  test('Part 2', () => {
    const result = part2([1721, 979, 366, 299, 675, 1456]);
    expect(result).toEqual(241861950);
  });
});
