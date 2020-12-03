import {loadData} from '../shared/utils';

/*
https://adventofcode.com/2020/day/1
*/

/**
 * Given a list of numbers, find the two that sum to 2020 and return their product.
 */
export const part1 = (input: Array<number>): number => {
  for (let a = 0; a < input.length; a += 1) {
    for (let b = a; b < input.length; b += 1) {
      if (input[a] + input[b] === 2020) {
        return input[a] * input[b];
      }
    }
  }
  return -1;
};

/**
 * Given a list of numbers, find the three that sum to 2020 and return their product.
 */
export const part2 = (input: Array<number>): number => {
  for (let a = 0; a < input.length; a += 1) {
    for (let b = a; b < input.length; b += 1) {
      for (let c = b; c < input.length; c += 1) {
        if (input[a] + input[b] + input[c] === 2020) {
          return input[a] * input[b] * input[c];
        }
      }
    }
  }
  return -1;
};

/**
 * Parse the puzzle input file ready for processing
 */
/* istanbul ignore next */
export const parse = async (): Promise<Array<number>> =>
  (await loadData(2020, 1)).split('\n').map(line => parseInt(line, 10));
