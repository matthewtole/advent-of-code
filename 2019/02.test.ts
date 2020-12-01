import {Intcode, part1, part2} from './02';

describe('Day 02', () => {
  test('Intcode', () => {
    expect(Intcode([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
    expect(Intcode([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
    expect(Intcode([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
    expect(Intcode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
      30,
      1,
      1,
      4,
      2,
      5,
      6,
      0,
      99,
    ]);
  });

  test('Part 1', () => {
    expect(part1([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual(30);
  });

  test('Part 2', () => {
    expect(part2([2, 0, 0, 0, 99], 9801)).toEqual(404);
  });
});
