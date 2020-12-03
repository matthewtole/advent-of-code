import {loadData} from '../shared/utils';

/*
https://adventofcode.com/2020/day/2
*/

interface Password {
  num1: number;
  num2: number;
  letter: string;
  password: string;
}

/**
 * Given an array of passwords, return the number that satsify the requirements of part 1
 */
export const part1 = (input: Array<Password>): number => {
  return input.filter(({password, letter, num1, num2}) => {
    const letterCount = password.split('').filter(l => l === letter).length;
    return letterCount >= num1 && letterCount <= num2;
  }).length;
};

/**
 * Given an array of passwords, return the number that satsify the requirements of part 2
 */
export const part2 = (input: Array<Password>): number => {
  return input.filter(({password, num1: min, num2: max, letter}) => {
    return (
      (password.substr(min - 1, 1) === letter &&
        password.substr(max - 1, 1) !== letter) ||
      (password.substr(min - 1, 1) !== letter &&
        password.substr(max - 1, 1) === letter)
    );
  }).length;
};

/**
 * Parse the puzzle input file ready for processing
 */
/* istanbul ignore next */
export const parse = async (): Promise<Array<Password>> =>
  (await loadData(2020, 2)).split('\n').map(line => parsePassword(line));

export const parsePassword = (line: string): Password => {
  const result = /^([0-9]+)\-([0-9]+)\ ([a-z])\:\ ([a-z]+)$/.exec(line);
  return {
    num1: parseInt(result![1], 10),
    num2: parseInt(result![2], 10),
    letter: result![3],
    password: result![4],
  };
};
