import {part1, part2} from './01';

describe('Day 1', () => {
  test('Part 1', () => {
    expect(part1('(())')).toEqual(0);
    expect(part1('()()')).toEqual(0);
    expect(part1('((')).toEqual(2);
    expect(part1('()(')).toEqual(1);
    expect(part1('(()(()(')).toEqual(3);
    expect(part1('))( ')).toEqual(-2);
  });

  test('Part 2', () => {
    expect(part2(')')).toEqual(1);
    expect(part2('()())')).toEqual(5);
  });
});
