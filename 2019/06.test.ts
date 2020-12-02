import {part1, part2} from './06';

describe('Day 6', () => {
  test('Part 1', () => {
    expect(
      part1([
        ['COM', 'B'],
        ['B', 'C'],
        ['C', 'D'],
        ['D', 'E'],
        ['E', 'F'],
        ['B', 'G'],
        ['G', 'H'],
        ['D', 'I'],
        ['E', 'J'],
        ['J', 'K'],
        ['K', 'L'],
      ])
    ).toEqual(42);
  });

  test('Part 1', () => {
    expect(
      part2(
        [
          ['COM', 'B'],
          ['B', 'C'],
          ['C', 'D'],
          ['D', 'E'],
          ['E', 'F'],
          ['B', 'G'],
          ['G', 'H'],
          ['D', 'I'],
          ['E', 'J'],
          ['J', 'K'],
          ['K', 'L'],
          ['K', 'YOU'],
          ['I', 'SAN'],
        ],
        'YOU',
        'SAN'
      )
    ).toEqual(4);
  });
});
