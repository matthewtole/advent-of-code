import {getBasin, part1, part2} from './09';

describe('Day 9', () => {
  const testData = [
    [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
    [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
    [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
    [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
    [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
  ];

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(15);
  });

  test('getBasinSize', () => {
    expect(getBasin(testData, 0, 1, []).length).toEqual(3);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(1134);
  });
});
