import {part1, part2, DataType} from './05';

describe('Day 5', () => {
  const testData: Array<DataType> = [
    [
      [0, 9],
      [5, 9],
    ],
    [
      [8, 0],
      [0, 8],
    ],
    [
      [9, 4],
      [3, 4],
    ],
    [
      [2, 2],
      [2, 1],
    ],
    [
      [7, 0],
      [7, 4],
    ],
    [
      [6, 4],
      [2, 0],
    ],
    [
      [0, 9],
      [2, 9],
    ],
    [
      [3, 4],
      [1, 4],
    ],
    [
      [0, 0],
      [8, 8],
    ],
    [
      [5, 5],
      [8, 2],
    ],
  ];

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(5);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(12);
  });
});
