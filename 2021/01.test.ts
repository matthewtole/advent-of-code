import {part1, part2, DataType} from './01';

describe('Day 01', () => {
  const testData: Array<DataType> = [
    199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
  ];

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(7);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(5);
  });
});
