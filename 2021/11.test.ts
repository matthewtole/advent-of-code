import {parseData, part1, part2, step} from './11';

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

  test('step', () => {
    const data = parseData(`11111
19991
19191
19991
11111`);
    step(data);
    expect(data.map(row => row.join('')).join('\n')).toEqual(`34543
40004
50005
40004
34543`);
  });

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(1656);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(195);
  });
});
