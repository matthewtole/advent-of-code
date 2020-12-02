import {flattenImage, parseImageString, part1} from './08';

describe('Day 8', () => {
  test('parseImageString', () => {
    expect(parseImageString('123456789012', 3, 2)).toEqual([
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      [
        [7, 8, 9],
        [0, 1, 2],
      ],
    ]);
  });

  test('Part 1', () => {
    expect(part1(parseImageString('123456789012', 3, 2))).toEqual(1);
  });

  test('Part 2', () => {
    expect(flattenImage(parseImageString('0222112222120000', 2, 2))).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });
});
