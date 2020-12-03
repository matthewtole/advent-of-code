import {loadData} from '../shared/utils';

/*
https://adventofcode.com/2020/day/1
*/

/**
 * Calculate the total fuel needed for a list of masses
 */
export const part1 = (input: Array<number>): number => {
  return input.reduce((totalFuel, mass) => {
    const fuel = Math.floor(mass / 3) - 2;
    return totalFuel + fuel;
  }, 0);
};

/**
 * Calculate the total fuel needed for a list of masses,
 * including the fuel needed for the mass of the fuel.
 */
export const part2 = (input: Array<number>): number => {
  return input.reduce((sum, mass) => {
    let totalFuel = 0;
    let remainingMass = mass;
    while (true) {
      const fuel = Math.floor(remainingMass / 3) - 2;
      if (fuel <= 0) {
        break;
      }
      totalFuel += fuel;
      remainingMass = fuel;
    }
    return sum + totalFuel;
  }, 0);
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = async (): Promise<Array<number>> =>
  (await loadData(2019, 1)).split('\n').map(line => parseInt(line, 10));
