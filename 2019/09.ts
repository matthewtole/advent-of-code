import {IntcodeComputer} from './intcode';
import {parseIntcode} from './utils';

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
  return outputs[outputs.length - 1]!;
};

export const part2 = (program: Array<number>): number => {
  const computer = new IntcodeComputer([...program]);
  computer.addInput(2);
  const outputs = [];
  while (!computer.isHalted()) {
    outputs.push(computer.run());
  }
  return outputs[outputs.length - 1]!;
};

/**
 * Parse the puzzle input file ready for processing
 */
/* istanbul ignore next */
export const parse = (): Promise<Array<number>> => parseIntcode(9);
