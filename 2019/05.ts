import {loadData} from '../shared/utils';
import {Intcode} from './intcode';

/*
https://adventofcode.com/2019/day/5
*/

/**
 * Runs an intcode computer, taking in a noun and verb,
 * and returns the value of the first position in memory.
 */
export const part1 = (program: Array<number>, input: number): number => {
  return Intcode(program, [input]);
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = async (): Promise<Array<number>> => {
  return (await loadData(2019, 5)).split(',').map(line => parseInt(line, 10));
};
