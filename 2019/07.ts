import * as fs from 'fs';

import {IntcodeComputer} from './intcode';
import {permute} from './utils';

/*
https://adventofcode.com/2019/day/7
*/

/**
 * Given an Intcode program and a sequence of amplifiers,
 * run all of the programs until the last one halts and return the output.
 */
export const runAmplifiers = (
  program: Array<number>,
  sequence: Array<number>
): number => {
  const computers = sequence.map(input => {
    const intcode = new IntcodeComputer([...program]);
    intcode.addInput(input);
    return intcode;
  });

  let output = 0;
  let currentComputer = 0;
  computers[currentComputer].addInput(0);
  while (true) {
    output = computers[currentComputer].run();
    if (
      computers[currentComputer].isHalted() &&
      currentComputer === computers.length - 1
    ) {
      return output;
    }
    currentComputer = (currentComputer + 1) % computers.length;
    computers[currentComputer].addInput(output);
  }
};

/**
 * Given an Intcode program and a base sequence of amplifiers,
 * find the sequence of amplifiers that returns the highest output and return that value.
 */
export const solve = (
  program: Array<number>,
  amplifiers: Array<number>
): number => {
  const possibleSequences = permute(amplifiers);
  return possibleSequences.reduce((max, sequence) => {
    return Math.max(max, runAmplifiers(program, sequence));
  }, 0);
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = (): Promise<Array<number>> => {
  return new Promise((resolve, reject) => {
    fs.readFile('./2019/data/07.txt', (err, data) => {
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
