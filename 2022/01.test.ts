import {part1, part2, DataType} from './01';

describe('Day 01', () => {
  const testData: Array<DataType> = [
    [1000, 2000, 3000],
    [4000],
    [5000, 6000],
    [7000, 8000, 9000],
    [10000],
  ];

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(24000);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(45000);
  });
});
