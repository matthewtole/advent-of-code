import {part1, part2} from '../03';

describe('Day 3', () => {
  const testData = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(198);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(230);
  });
});
