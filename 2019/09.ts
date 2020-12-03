import * as fs from 'fs';

import {IntcodeComputer} from './intcode';

/*
https://adventofcode.com/2020/day/1
*/

export const part1 = (program: Array<number>): number => {
  const computer = new IntcodeComputer([...program]);
  computer.addInput(1);
  const outputs = [];
  while (!computer.isHalted()) {
    outputs.push(computer.run());
  }
  return outputs[outputs.length - 1];
};

export const part2 = (program: Array<number>): number => {
  const computer = new IntcodeComputer([...program]);
  computer.addInput(2);
  const outputs = [];
  while (!computer.isHalted()) {
    outputs.push(computer.run());
  }
  return outputs[outputs.length - 1];
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = (): Promise<Array<number>> => {
  return new Promise((resolve, reject) => {
    fs.readFile('./2019/data/09.txt', (err, data) => {
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
