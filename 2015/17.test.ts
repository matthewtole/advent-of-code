import {generatePermutations, part1, part2} from './17';

describe('Day 17', () => {
  test('generatePermutations', () => {
    expect(generatePermutations([1, 2])).toEqual([[1], [2], [1, 2]]);
  });

  test('Part 1', () => {
    expect(part1([20, 15, 10, 5, 5], 25)).toEqual(4);
  });

  test('Part 2', () => {
    expect(part2([20, 15, 10, 5, 5], 25)).toEqual(3);
  });
});
