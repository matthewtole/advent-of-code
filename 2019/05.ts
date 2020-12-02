import * as fs from 'fs';

import {Intcode} from './intcode';

/*
https://adventofcode.com/2019/day/5
*/

/**
 * Runs an intcode computer, taking in a noun and verb,
 * and returns the value of the first position in memory.
 */
export const part1 = (program: Array<number>, input: number): number => {
  return Intcode(program, input);
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = (): Promise<Array<number>> => {
  return new Promise((resolve, reject) => {
    fs.readFile('./2019/data/05.txt', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(
        data
          .toString()
          .split(',')
          .map(line => parseInt(line, 10))
      );
    });
  });
};
