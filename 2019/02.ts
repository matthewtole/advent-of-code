import * as fs from 'fs';

const ADD = 1;
const MULIPLY = 2;
const HALT = 99;

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

export const runComputer = (
  program: Array<number>,
  noun: number,
  verb: number
): number => {
  return Intcode([program[0], noun, verb, ...program.slice(3)])[0];
};

export const part1 = (input: Array<number>): number => {
  return Intcode(input)[0];
};

export const part2 = (
  program: Array<number>,
  expectedOutput: number
): number => {
  for (let n = 0; n < 100; n += 1) {
    for (let v = 0; v < 100; v += 1) {
      if (runComputer(program, n, v) === expectedOutput) {
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
