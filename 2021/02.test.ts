import {part1, part2, DataType} from './02';

describe('Day 02', () => {
  const testData: Array<DataType> = [
    ['forward', 5],
    ['down', 5],
    ['forward', 8],
    ['up', 3],
    ['down', 8],
    ['forward', 2],
  ];

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(150);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(900);
  });
});
