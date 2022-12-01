import {part1, part2} from './05';

describe('Day 05', () => {
  test('Part 1', () => {
    const result = part1([0, 3, 0, 1, -3]);
    expect(result).toEqual(5);
  });

  test('Part 2', () => {
    const result = part2([0, 3, 0, 1, -3]);
    expect(result).toEqual(10);
  });
});
