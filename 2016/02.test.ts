import {part1, part2} from './02';

describe('Day 02', () => {
  test('Part 1', () => {
    expect(part1(['ULL', 'RRDDD', 'LURDL', 'UUUUD'])).toEqual('1985');
  });

  test('Part 2', () => {
    expect(part2(['ULL', 'RRDDD', 'LURDL', 'UUUUD'])).toEqual('5DB3');
  });
});
