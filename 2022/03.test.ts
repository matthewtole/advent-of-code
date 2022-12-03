import {part1, part2} from './03';

describe('Day 03', () => {
  const data = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw',
  ];
  test('Part 1', () => {
    const result = part1(data);
    expect(result).toEqual(157);
  });

  test('Part 2', () => {
    const result = part2(data);
    expect(result).toEqual(70);
  });
});
