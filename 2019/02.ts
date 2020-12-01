import * as fs from 'fs';

/*
https://adventofcode.com/2020/day/2
*/

const ADD = 1;
const MULIPLY = 2;
const HALT = 99;

/**
 * Basic intcode computer that takes an input of numbers and returns the final state of the program.
 */
export const Intcode = (input: Array<number>): Array<number> => {
  const output = [...input];
  let position = 0;
  while (output[position] !== HALT) {
    switch (output[position++]) {
      case ADD:
        {
          const result =
            output[output[position++]] + output[output[position++]];
          output[output[position++]] = result;
        }
        break;
      case MULIPLY:
        {
          const result =
            output[output[position++]] * output[output[position++]];
          output[output[position++]] = result;
        }
        break;
    }
  }

  return output;
};

/**
 * Runs an intcode computer, taking in a noun and verb,
 * and returns the value of the first position in memory.
 */
export const part1 = (
  program: Array<number>,
  noun: number,
  verb: number
): number => {
  return Intcode([program[0], noun, verb, ...program.slice(3)])[0];
};

/**
 * Given an Intcode program and an expected result,
 * calculate the noun/verb pair that will generate that output.
 */
export const part2 = (
  program: Array<number>,
  expectedOutput: number
): number => {
  for (let n = 0; n < 100; n += 1) {
    for (let v = 0; v < 100; v += 1) {
      if (part1(program, n, v) === expectedOutput) {
        return n * 100 + v;
      }
    }
  }
  return -1;
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = (): Promise<Array<number>> => {
  return new Promise((resolve, reject) => {
    fs.readFile('./2019/data/02.txt', (err, data) => {
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
