import {convertData, isValidTriangle, part1, part2} from './03';

describe('Day 03', () => {
  test('isValidTriangle', () => {
    expect(isValidTriangle([5, 10, 25])).toBeFalsy();
    expect(isValidTriangle([5, 5, 5])).toBeTruthy();
  });

  test('Part 1', () => {
    expect(
      part1([
        [5, 10, 25],
        [5, 5, 5],
        [10, 10, 10],
      ])
    ).toEqual(2);
  });

  test('convertData', () => {
    expect(
      convertData([
        [101, 301, 501],
        [102, 302, 502],
        [103, 303, 503],
        [201, 401, 601],
        [202, 402, 602],
        [203, 403, 603],
      ]).sort((a, b) => a[0] - b[0])
    ).toEqual([
      [101, 102, 103],
      [201, 202, 203],
      [301, 302, 303],
      [401, 402, 403],
      [501, 502, 503],
      [601, 602, 603],
    ]);
  });

  test('Part 2', () => {
    expect(
      part2([
        [5, 10, 25],
        [5, 5, 5],
        [10, 10, 10],
      ])
    ).toEqual(1);
  });
});
