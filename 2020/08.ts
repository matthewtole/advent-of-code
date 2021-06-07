import {loadData} from '../shared/utils';

type Program = Array<[string, number]>;

/**
 * Run a computer program, returning the last value in the accumulator
 * and whether or not the program actually terminated.
 */
const runProgram = (input: Program): [number, boolean] => {
  let accumulator = 0;
  let position = 0;
  let positions = new Set<number>([]);
  while (position < input.length) {
    if (positions.has(position)) {
      return [accumulator, false];
    }
    positions.add(position);
    const [command, value] = input[position]!;
    switch (command!) {
      case 'jmp':
        position += value;
        break;
      case 'acc':
        accumulator += value;
        position += 1;
        break;
      default:
        position += 1;
    }
  }
  return [accumulator, true];
};

/**
 * Return a copy of a computer program with the given command swapped between a jmp and a nop
 */
const flipCommand = (program: Program, position: number): Program =>
  program.map(([command, value], index) =>
    index === position
      ? [command === 'jmp' ? 'nop' : 'jmp', value]
      : [command, value]
  );

/**
 * Run a computer program and return the last accumulator value before it enters into an infinite loop
 */
export const part1 = (input: Program): number => {
  return runProgram(input)[0];
};

/**
 * Find the single jmp/nop swap that will prevent the computer from entering an infinite loop,
 * and then return the accumulator value.
 */
export const part2 = (input: Program): number => {
  for (let index = 0; index < input.length; index++) {
    if (!['jmp', 'nop'].includes(input[index]![0])) {
      continue;
    }
    const [accumulator, didTerminate] = runProgram(flipCommand(input, index));
    if (didTerminate) {
      return accumulator;
    }
  }
  /* istanbul ignore next */
  return -1;
};

/**
 * Parse a string into a list of computer commands.
 */
export const parseProgram = (data: string): Program => {
  return data.split('\n').map(line => {
    const bits = line.split(' ');
    return [bits[0], parseInt(bits[1]!, 10)] as [string, number];
  });
};

/* istanbul ignore next */
export const parse = async () => parseProgram(await loadData(2020, 8));
