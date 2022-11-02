import {findConnections, part1, part2} from './12';

describe('Day 12', () => {
  const testDataSmall: Array<[string, string]> = [
    ['start', 'A'],
    ['start', 'b'],
    ['A', 'c'],
    ['A', 'b'],
    ['b', 'd'],
    ['A', 'end'],
    ['b', 'end'],
  ];

  const testDataMedium: Array<[string, string]> = [
    ['dc', 'end'],
    ['HN', 'start'],
    ['start', 'kj'],
    ['dc', 'start'],
    ['dc', 'HN'],
    ['LN', 'dc'],
    ['HN', 'end'],
    ['kj', 'sa'],
    ['kj', 'HN'],
    ['kj', 'dc'],
  ];

  const testDataLarge: Array<[string, string]> = [
    ['fs', 'end'],
    ['he', 'DX'],
    ['fs', 'he'],
    ['start', 'DX'],
    ['pj', 'DX'],
    ['end', 'zg'],
    ['zg', 'sl'],
    ['zg', 'pj'],
    ['pj', 'he'],
    ['RW', 'he'],
    ['fs', 'DX'],
    ['pj', 'RW'],
    ['zg', 'RW'],
    ['start', 'pj'],
    ['he', 'WI'],
    ['zg', 'he'],
    ['pj', 'fs'],
    ['start', 'RW'],
  ];

  test('findConnections', () => {
    expect(findConnections(testDataSmall, 'start')).toEqual(['A', 'b']);
    expect(findConnections(testDataSmall, 'b')).toEqual([
      'start',
      'A',
      'd',
      'end',
    ]);
  });

  test('Part 1', () => {
    expect(part1(testDataSmall)).toEqual(10);
    expect(part1(testDataMedium)).toEqual(19);
    expect(part1(testDataLarge)).toEqual(226);
  });

  test('Part 2', () => {
    expect(part2(testDataSmall)).toEqual(36);
    expect(part2(testDataMedium)).toEqual(103);
    expect(part2(testDataLarge)).toEqual(3509);
  });
});
