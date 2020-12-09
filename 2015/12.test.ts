import {part1, part2} from './12';

describe('Day 12', () => {
  test('Part 1', () => {
    expect(part1(5)).toEqual(5);
    expect(part1([1, 2, 3])).toEqual(6);
    expect(part1({a: 2, b: 4})).toEqual(6);
    expect(part1({a: [-1, 1]})).toEqual(0);
    expect(part1({})).toEqual(0);
  });

  test('Part 2', () => {
    expect(part2([1, 2, 3])).toEqual(6);
    expect(part2({d: 'red', e: [1, 2, 3, 4], f: 5})).toEqual(0);
    expect(part2([1, {c: 'red', b: 2}, 3])).toEqual(4);
    expect(part2([1, 'red', 5])).toEqual(6);
  });
});
