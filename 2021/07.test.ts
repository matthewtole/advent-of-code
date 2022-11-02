import {part1, part2} from './07';

describe('Day 7', () => {
  const testData = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(37);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(168);
  });
});
