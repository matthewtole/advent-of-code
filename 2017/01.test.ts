import {part1, part2} from './01';

describe('Day 01', () => {
  test('Part 1', () => {
    expect(part1('1122'.split('').map(Number))).toEqual(3);
    expect(part1('1111'.split('').map(Number))).toEqual(4);
    expect(part1('1234'.split('').map(Number))).toEqual(0);
    expect(part1('91212129'.split('').map(Number))).toEqual(9);
  });

  test('Part 2', () => {
    expect(part2('1212'.split('').map(Number))).toEqual(6);
    expect(part2('1221'.split('').map(Number))).toEqual(0);
    expect(part2('123425'.split('').map(Number))).toEqual(4);
    expect(part2('123123'.split('').map(Number))).toEqual(12);
    expect(part2('12131415'.split('').map(Number))).toEqual(4);
  });
});
