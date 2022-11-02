import {loadData} from '../shared/utils';

export type DataType = any;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2022, 1)).split('\n');

export const part1 = (data: Array<DataType>): number => data.length;

export const part2 = (data: Array<DataType>): number => data.length;
