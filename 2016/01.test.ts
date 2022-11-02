import {part1, part2} from './01';

describe('Day 01', () => {
  test('Part 1', () => {
    expect(part1(['R2', 'L3'])).toEqual(5);
    expect(part1(['R2', 'R2', 'R2'])).toEqual(2);
    expect(part1(['R5', 'L5', 'R5', 'R3'])).toEqual(12);
  });

  test('Part 2', () => {
    const result = part2(['R8', 'R4', 'R4', 'R8']);
    expect(result).toEqual(4);
  });
});
