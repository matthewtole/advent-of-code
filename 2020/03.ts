import {loadData} from '../shared/utils';

/*
https://adventofcode.com/2020/day/3
*/

/**
 * Given a string map of trees, and a slope to take,
 * return the number of trees encountered reaching the bottom.
 */
export const part1 = (input: string, slope: [number, number]): number => {
  let pos = slope;
  let count = 0;
  const data = input.split('\n').map(row => row.split(''));
  while (pos[1] < data.length) {
    if (data[pos[1]]![pos[0]]! === '#') {
      count += 1;
    }
    pos = [(pos[0] + slope[0]) % data[0]!.length, pos[1] + slope[1]];
  }
  return count;
};

/**
 * Given a string map of trees, calculate the product
 * of the output of part1 for an array of slopes
 */
export const part2 = (
  input: string,
  slopes: Array<[number, number]>
): number => {
  return slopes.reduce((result, slope) => result * part1(input, slope), 1);
};

/**
 * Parse the puzzle input file ready for processing
 */
/* istanbul ignore next */
export const parse = (): Promise<string> => loadData(2020, 3);
