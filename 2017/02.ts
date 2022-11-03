import {loadData, max, min, sum} from '../shared/utils';

export type DataType = Array<number>;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2017, 2)).split('\n').map(row => row.split('\t').map(Number));

export const part1 = (data: Array<DataType>): number => {
  return sum(data.map(row => max(row) - min(row)));
};

export const part2 = (data: Array<DataType>): number => {
  return sum(
    data.map((row, index) => {
      for (let i = 0; i < row.length; i += 1) {
        for (let j = i + 1; j < row.length; j += 1) {
          if (row[i] % row[j] === 0) {
            return row[i] / row[j];
          }
          if (row[j] % row[i] === 0) {
            return row[j] / row[i];
          }
        }
      }
      throw new Error(`No match found on row ${index}`);
    })
  );
};
