import {loadData, max} from '../shared/utils';

export type DataType = [
  target: string,
  targetValue: number,
  check: string,
  checkOp: string,
  checkValue: number
];

type Registers = Record<string, number>;

export const parseData = (row: string): DataType => {
  const parsed = row.split(' ');
  return [
    parsed[0],
    Number(parsed[2]) * (parsed[1] === 'dec' ? -1 : 1),
    parsed[4],
    parsed[5],
    Number(parsed[6]),
  ];
};

const OPERATORS: Record<string, (x: number, y: number) => boolean> = {
  '>': (x, y) => x > y,
  '<': (x, y) => x < y,
  '<=': (x, y) => x <= y,
  '>=': (x, y) => x >= y,
  '==': (x, y) => x === y,
  '!=': (x, y) => x != y,
};

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2017, 8)).split('\n').map(parseData);

function executeInstruction(
  registers: Registers,
  instruction: DataType
): Registers {
  const check = registers[instruction[2]] ?? 0;
  const operator = OPERATORS[instruction[3]] ?? (() => false);
  if (operator(check, instruction[4])) {
    return {
      ...registers,
      [instruction[0]]: (registers[instruction[0]] ?? 0) + instruction[1],
    };
  }
  return {...registers};
}

export const part1 = (data: Array<DataType>): number => {
  return max(
    Object.values(
      data.reduce(
        (registers, instruction) => executeInstruction(registers, instruction),
        {}
      )
    )
  );
};

export const part2 = (data: Array<DataType>): number => {
  return data.reduce(
    ([registers, maxValue], instruction) => {
      const newRegisters = executeInstruction(registers, instruction);
      return [
        newRegisters,
        Math.max(maxValue, max(Object.values(newRegisters))),
      ] as [Registers, number];
    },
    [{}, 0] as [Registers, number]
  )[1];
};
