import {part1, part2} from './02';

describe('Day 02', () => {
  const data = [
    ['A', 'Y'],
    ['B', 'X'],
    ['C', 'Z'],
  ];

  test('Part 1', () => {
    const result = part1(data);
    expect(result).toEqual(15);
  });

  test('Part 2', () => {
    const result = part2(data);
    expect(result).toEqual(12);
  });
});
