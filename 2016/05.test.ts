import {part1, part2} from './05';

describe.skip('Day 05', () => {
  test('Part 1', () => {
    expect(part1('abc')).toEqual('18f47a30');
  });

  test('Part 2', () => {
    expect(part2('abc')).toEqual('05ace8e3');
  });
});
