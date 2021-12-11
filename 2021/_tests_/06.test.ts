import {part1, part2} from '../06';

describe('Day 6', () => {
  const testData = [3, 4, 3, 1, 2];

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(5934);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(26984457539);
  });
});
