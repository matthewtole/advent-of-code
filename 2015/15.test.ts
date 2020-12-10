import {calculateCalories, calculateCookie, part1, part2} from './15';

describe('Day 15', () => {
  test('calculateCookie', () => {
    expect(
      calculateCookie(
        [
          [-1, -2, 6, 3, 8],
          [2, 3, -2, -1, 3],
        ],
        [44, 56]
      )
    ).toEqual(62842880);
  });

  test('calculateCalories', () => {
    expect(
      calculateCalories(
        [
          [-1, -2, 6, 3, 8],
          [2, 3, -2, -1, 3],
        ],
        [40, 60]
      )
    ).toEqual(500);
  });

  test('Part 1', () => {
    expect(
      part1([
        [2, 0, -2, 0, 3],
        [0, 5, -3, 0, 3],
        [0, 0, 5, -1, 8],
        [0, -1, 0, 5, 8],
      ])
    ).toEqual(21367368);
  });

  test('Part 2', () => {
    expect(
      part2([
        [2, 0, -2, 0, 3],
        [0, 5, -3, 0, 3],
        [0, 0, 5, -1, 8],
        [0, -1, 0, 5, 8],
      ])
    ).toEqual(1766400);
  });
});
