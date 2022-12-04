import {loadData} from '../shared/utils';

export type DataType = [[number, number], [number, number]];

/* istanbul ignore next */
function assertIsPair<T>(input: Array<T>): [T, T] {
  if (input.length !== 2) {
    throw new Error('Did not find valid pair');
  }
  return [input[0], input[1]];
}

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2022, 4))
    .split('\n')
    .map(row =>
      assertIsPair(
        row.split(',').map(pair => assertIsPair(pair.split('-').map(Number)))
      )
    );

function doesOverlap(range1: [number, number], range2: [number, number]) {
  return range1[0] >= range2[0] && range1[1] <= range2[1];
}

export const part1 = (data: Array<DataType>): number =>
  data.filter(
    ([range1, range2]) =>
      doesOverlap(range1, range2) || doesOverlap(range2, range1)
  ).length;

function isInside(number: number, range: [number, number]): boolean {
  return number >= range[0] && number <= range[1];
}

export const part2 = (data: Array<DataType>): number =>
  data.filter(
    ([range1, range2]) =>
      isInside(range1[0], range2) ||
      isInside(range1[1], range2) ||
      isInside(range2[0], range1) ||
      isInside(range2[1], range1)
  ).length;
