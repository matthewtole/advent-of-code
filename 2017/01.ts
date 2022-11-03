import {loadData, sum} from '../shared/utils';

export type DataType = number;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2017, 1)).split('').map(Number);

export const part1 = (data: Array<DataType>): number => {
  return sum(
    data.filter((digit, index) => digit === data[(index + 1) % data.length])
  );
};

export const part2 = (data: Array<DataType>): number => {
  return sum(
    data.filter(
      (digit, index) => digit === data[(index + data.length / 2) % data.length]
    )
  );
};
