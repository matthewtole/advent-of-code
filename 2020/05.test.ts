import {calculateSeatID, part1} from './05';

describe('Day 5', () => {
  test('calculateSeatID', () => {
    expect(calculateSeatID('BFFFBBFRRR')).toEqual(567);
    expect(calculateSeatID('FFFBBBFRRR')).toEqual(119);
    expect(calculateSeatID('BBFFBBFRLL')).toEqual(820);
  });

  test('part1', () => {
    expect(part1(['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'])).toEqual(820);
  });
});
