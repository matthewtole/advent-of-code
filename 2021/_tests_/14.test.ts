import {part1, part2, DataType, step} from '../14';

describe('Day 14', () => {
  const testData: DataType = [
    'NNCB',
    [
      ['CH', 'B'],
      ['HH', 'N'],
      ['CB', 'H'],
      ['NH', 'C'],
      ['HB', 'C'],
      ['HC', 'B'],
      ['HN', 'C'],
      ['NN', 'C'],
      ['BH', 'H'],
      ['NC', 'B'],
      ['NB', 'B'],
      ['BN', 'B'],
      ['BB', 'N'],
      ['BC', 'B'],
      ['CC', 'N'],
      ['CN', 'C'],
    ],
  ];

  test('step', () => {
    expect(step(testData[0], testData[1])).toEqual('NCNBCHB');
  });

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(1588);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(2188189693529);
  });
});
