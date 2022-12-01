import {part1, part2} from './02';

describe('Day 02', () => {
  test('Part 1', () => {
    const result = part1([
      [5, 1, 9, 5],
      [7, 5, 3],
      [2, 4, 6, 8],
    ]);
    expect(result).toEqual(18);
  });

  test('Part 2', () => {
    const result = part2([
      [5, 9, 2, 8],
      [9, 4, 7, 3],
      [3, 8, 6, 5],
    ]);
    expect(result).toEqual(9);
  });
});
