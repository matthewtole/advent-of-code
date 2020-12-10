import {countLitNeighbors, parseGrid, part1, part2} from './18';

describe('Day 18', () => {
  test('countLitNeighbors', () => {
    expect(
      countLitNeighbors(
        parseGrid(`.#.#.#
...##.
#....#
..#...
#.#..#
####..`),
        5,
        0
      )
    ).toEqual(1);
  });

  test('Part 1', () => {
    expect(
      part1(
        parseGrid(`.#.#.#
...##.
#....#
..#...
#.#..#
####..`),
        4
      )
    ).toEqual(4);
  });

  test('Part 2', () => {
    expect(
      part2(
        parseGrid(`##.#.#
...##.
#....#
..#...
#.#..#
####.#`),
        5
      )
    ).toEqual(17);
  });
});
