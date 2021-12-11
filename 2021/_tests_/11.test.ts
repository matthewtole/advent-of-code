import {parseData, part1, part2} from '../11';

describe('Day 11', () => {
  const testData = parseData(`5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`);

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(1656);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(195);
  });
});
