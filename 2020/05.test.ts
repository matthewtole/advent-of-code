import {calculateSeatID, part1, part2} from './05';

describe('Day 5', () => {
  test('calculateSeatID', () => {
    expect(calculateSeatID('BFFFBBFRRR')).toEqual(567);
    expect(calculateSeatID('FFFBBBFRRR')).toEqual(119);
    expect(calculateSeatID('BBFFBBFRLL')).toEqual(820);
  });

  test('part1', () => {
    expect(part1(['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'])).toEqual(820);
  });

  test('part2', () => {
    expect(part2(['FFFFFBLLL', 'FFFFFBLRL', 'FFFFFBLRR'])).toEqual(9);
  });
});
