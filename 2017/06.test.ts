import {part1, part2} from './06';

describe('Day 06', () => {
  test('Part 1', () => {
    const result = part1([0, 2, 7, 0]);
    expect(result).toEqual(5);
  });

  test('Part 2', () => {
    const result = part2([0, 2, 7, 0]);
    expect(result).toEqual(4);
  });
});
