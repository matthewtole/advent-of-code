import {calculateDistance, part1, part2} from './14';

describe('Day 14', () => {
  test('calculateDistance', () => {
    expect(calculateDistance(['Comet', 14, 10, 127], 1000)).toEqual(1120);
    expect(calculateDistance(['Dancer', 16, 11, 162], 1000)).toEqual(1056);
  });

  test('Part 1', () => {
    expect(
      part1(
        [
          ['Comet', 14, 10, 127],
          ['Dancer', 16, 11, 162],
        ],
        1000
      )
    ).toEqual(1120);
  });

  test('Part 2', () => {
    expect(
      part2(
        [
          ['Comet', 14, 10, 127],
          ['Dancer', 16, 11, 162],
        ],
        1000
      )
    ).toEqual(689);
  });
});
