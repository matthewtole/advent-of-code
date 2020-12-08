import {generatePattern, getPatternValue, part1, part2} from './16';

describe('Day 16', () => {
  test('generatePattern', () => {
    expect(generatePattern(8, 1)).toEqual([1, 0, -1, 0, 1, 0, -1, 0]);
    expect(generatePattern(8, 2)).toEqual([0, 1, 1, 0, 0, -1, -1, 0]);
    expect(generatePattern(16, 3)).toEqual([
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      -1,
      -1,
      -1,
      0,
      0,
      0,
      1,
      1,
    ]);
  });

  test('Pattern comparison', () => {
    expect(generatePattern(32, 1)[0]).toEqual(getPatternValue(1, 0));
    expect(generatePattern(32, 16)[12]).toEqual(getPatternValue(16, 12));
  });

  test('getPatternValue', () => {
    expect(getPatternValue(1, 0)).toEqual(1);
    expect(getPatternValue(1, 1)).toEqual(0);
    expect(getPatternValue(1, 2)).toEqual(-1);
    expect(getPatternValue(1, 3)).toEqual(0);
    expect(getPatternValue(1, 4)).toEqual(1);

    expect(getPatternValue(2, 0)).toEqual(0);
    expect(getPatternValue(2, 1)).toEqual(1);
    expect(getPatternValue(2, 2)).toEqual(1);
    expect(getPatternValue(2, 3)).toEqual(0);
    expect(getPatternValue(2, 4)).toEqual(0);
    expect(getPatternValue(2, 5)).toEqual(-1);
    expect(getPatternValue(2, 6)).toEqual(-1);
    expect(getPatternValue(2, 7)).toEqual(0);
    expect(getPatternValue(2, 8)).toEqual(0);
    expect(getPatternValue(2, 9)).toEqual(1);

    expect(getPatternValue(3, 0)).toEqual(0);
    expect(getPatternValue(3, 1)).toEqual(0);
    expect(getPatternValue(3, 2)).toEqual(1);
  });

  test('Part 1', () => {
    expect(
      part1(
        '80871224585914546619083218645595'.split('').map(i => parseInt(i, 10))
      )
    ).toEqual('24176176');
  });

  // test.skup('Part 2', () => {
  //   expect(
  //     part2(
  //       '03036732577212944063491565474664'.split('').map(i => parseInt(i, 10))
  //     )
  //   ).toEqual('84462026');
  // });
});
