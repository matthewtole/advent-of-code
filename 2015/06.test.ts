import {part1, part2} from './06';

describe('Day 6', () => {
  test('Part 1', () => {
    expect(part1(['turn on 0,0 through 999,999'])).toEqual(1000000);
    expect(part1(['toggle 0,0 through 999,0'])).toEqual(1000);
  });

  test('Part 2', () => {
    expect(part2(['turn on 0,0 through 0,0'])).toEqual(1);
    expect(part2(['toggle 0,0 through 999,999'])).toEqual(2000000);
  });
});
