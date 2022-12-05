import {loadData} from '../shared/utils';
import * as R from 'ramda';

export type DataType = [
  stacks: Array<Array<string>>,
  instructions: Array<[size: number, from: number, to: number]>
];

/* istanbul ignore next */
export const parse = async (): Promise<DataType> => {
  const [stacks, instructions] = (await loadData(2022, 5)).split('\n\n');
  return [
    stacks.split('\n').map(stack => stack.split('')),
    instructions.split('\n').map(instruction => {
      const data = /move (\d+) from (\d+) to (\d+)/.exec(instruction);
      if (data == null) {
        throw new Error();
      }
      return [Number(data[1]), Number(data[2]), Number(data[3])];
    }),
  ];
};

export const part1 = (data: DataType): string => {
  const [stacks, instructions] = R.clone(data);

  for (const instruction of instructions) {
    for (let i = 0; i < instruction[0]; i += 1) {
      stacks[instruction[2] - 1].push(stacks[instruction[1] - 1].pop()!);
    }
  }

  return stacks.map(s => s[s.length - 1]).join('');
};

export const part2 = (data: DataType): string => {
  const [stacks, instructions] = R.clone(data);

  for (const instruction of instructions) {
    let substack: Array<string> = [];
    for (let i = 0; i < instruction[0]; i += 1) {
      substack.push(stacks[instruction[1] - 1].pop()!);
    }
    stacks[instruction[2] - 1] = stacks[instruction[2] - 1].concat(
      substack.reverse()
    );
  }

  return stacks.map(s => s[s.length - 1]).join('');
};
