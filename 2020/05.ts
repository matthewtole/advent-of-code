import {loadData} from '../shared/utils';

/*
https://adventofcode.com/2020/day/5
*/

/**
 * Calculate the seat ID for a seat string
 */
export const calculateSeatID = (seat: string) => {
  return (
    8 * parseInt(seat.substr(0, 7).replace(/F/g, '0').replace(/B/g, '1'), 2) +
    parseInt(seat.substr(7).replace(/R/g, '1').replace(/L/g, '0'), 2)
  );
};

/**
 * Given a list of seats, calculate the highest seat ID
 */
export const part1 = (data: Array<string>): number => {
  return data.reduce((max, row) => Math.max(max, calculateSeatID(row)), 0);
};

/**
 * Given a list of seats, find the one that's missing
 */
export const part2 = (data: Array<string>): number => {
  const allSeats = data.map(calculateSeatID);
  const maxSeat = part1(data);
  for (let i = 1; i < maxSeat - 1; i += 1) {
    if (
      !allSeats.includes(i) &&
      allSeats.includes(i - 1) &&
      allSeats.includes(i + 1)
    ) {
      return i;
    }
  }
  /* istanbul ignore next */
  return -1;
};

/* istanbul ignore next */
export const parse = async () => (await loadData(2020, 5)).split('\n');
