import {loadData, max, sortNumbers, sum} from '../shared/utils';

export type DataType = Array<number>;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2022, 1))
    .split('\n\n')
    .map(section => section.split('\n').map(Number));

export const part1 = (data: Array<DataType>): number => max(data.map(sum));

export const part2 = (data: Array<DataType>): number =>
  sum(sortNumbers(data.map(sum), true).slice(0, 3));
