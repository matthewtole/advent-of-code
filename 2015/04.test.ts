import {part1, part2} from './04';

describe.skip('Day 4', () => {
  test('Part 1', () => {
    expect(part1('abcdef')).toEqual(609043);
    expect(part1('pqrstuv')).toEqual(1048970);
  });

  test('Part 2', () => {
    expect(part2('abcdef')).toEqual(6742839);
  });
});
