import {part1, part2} from './04';

describe('Day 04', () => {
  const data = [
    [
      [2, 4],
      [6, 8],
    ],
    [
      [2, 3],
      [4, 5],
    ],
    [
      [5, 7],
      [7, 9],
    ],
    [
      [2, 8],
      [3, 7],
    ],
    [
      [6, 6],
      [4, 6],
    ],
    [
      [2, 6],
      [4, 8],
    ],
  ];

  test('Part 1', () => {
    const result = part1(data);
    expect(result).toEqual(2);
  });

  test('Part 2', () => {
    const result = part2(data);
    expect(result).toEqual(4);
  });
});
