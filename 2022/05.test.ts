import {part1, part2} from './05';

describe('Day 05', () => {
  test('Part 1', () => {
    const result = part1([
      [['Z', 'N'], ['M', 'C', 'D'], ['P']],
      [
        [1, 2, 1],
        [3, 1, 3],
        [2, 2, 1],
        [1, 1, 2],
      ],
    ]);
    expect(result).toEqual('CMZ');
  });

  test('Part 2', () => {
    const result = part2([
      [['Z', 'N'], ['M', 'C', 'D'], ['P']],
      [
        [1, 2, 1],
        [3, 1, 3],
        [2, 2, 1],
        [1, 1, 2],
      ],
    ]);
    expect(result).toEqual('MCD');
  });
});
