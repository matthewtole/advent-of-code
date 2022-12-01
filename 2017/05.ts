import {loadData} from '../shared/utils';

export type DataType = number;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2017, 5)).split('\n').map(v => parseInt(v, 10));

export const part1 = (data: Array<DataType>): number => {
  let position = 0;
  let steps = 0;
  while (position >= 0 && position < data.length) {
    const newPosition = position + data[position];
    data[position] += 1;
    position = newPosition;
    steps += 1;
  }
  return steps;
};

export const part2 = (data: Array<DataType>): number => {
  let position = 0;
  let steps = 0;
  while (position >= 0 && position < data.length) {
    const newPosition = position + data[position];
    data[position] =
      data[position] >= 3 ? data[position] - 1 : data[position] + 1;
    position = newPosition;
    steps += 1;
  }
  return steps;
};
