import {loadData} from '../shared/utils';

export type DataType = string;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2016, 2)).split('\n');

const DIRECTIONS = ['U', 'D', 'L', 'R'];
const MOVES = [
  [0, 0, 0, 0],
  [1, 4, 1, 2],
  [2, 5, 1, 3],
  [3, 6, 2, 3],
  [1, 7, 4, 5],
  [2, 8, 4, 6],
  [3, 9, 5, 6],
  [4, 7, 7, 8],
  [5, 8, 7, 9],
  [6, 9, 8, 9],
];

type DigitPart2 = number | 'A' | 'B' | 'C' | 'D';

const MOVES_PART2: Record<
  DigitPart2,
  [DigitPart2, DigitPart2, DigitPart2, DigitPart2]
> = {
  1: [1, 3, 1, 1],
  2: [2, 6, 2, 3],
  3: [1, 7, 2, 4],
  4: [4, 8, 3, 4],
  5: [5, 5, 5, 6],
  6: [2, 'A', 5, 7],
  7: [3, 'B', 6, 8],
  8: [4, 'C', 7, 9],
  9: [9, 9, 8, 9],
  A: [6, 'A', 'A', 'B'],
  B: [7, 'D', 'A', 'C'],
  C: [8, 'C', 'B', 'C'],
  D: ['B', 'D', 'D', 'D'],
};

export const part1 = (data: Array<DataType>): string => {
  const code: Array<number> = [];
  let digit: number = 5;
  data.forEach(row => {
    row.split('').forEach(move => {
      digit = MOVES[digit][DIRECTIONS.indexOf(move)];
    });
    code.push(digit);
  });
  return code.join('');
};

export const part2 = (data: Array<DataType>): string => {
  const code: Array<DigitPart2> = [];
  let digit: DigitPart2 = 5;
  data.forEach(row => {
    row.split('').forEach(move => {
      digit = MOVES_PART2[digit][DIRECTIONS.indexOf(move)];
    });
    code.push(digit);
  });
  return code.join('');
};
