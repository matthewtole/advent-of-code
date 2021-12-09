import {loadData} from '../shared/utils';

export type DataType = string;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2016, 6)).split('\n');

function mode<T>(data: Array<T>): T {
  return data.reduce(
    (common, value) =>
      data.filter(d => d === value).length >
      data.filter(d => d === common).length
        ? value
        : common,
    data[0]
  );
}

function antimode<T>(data: Array<T>): T {
  return data.reduce(
    (common, value) =>
      data.filter(d => d === value).length <
      data.filter(d => d === common).length
        ? value
        : common,
    data[0]
  );
}

export const part1 = (data: Array<DataType>): string => {
  return new Array(data[0].length)
    .fill('')
    .map((_, index) => {
      return mode(data.map(d => d[index]));
    })
    .join('');
};

export const part2 = (data: Array<DataType>): string =>
  new Array(data[0].length)
    .fill('')
    .map((_, index) => {
      return antimode(data.map(d => d[index]));
    })
    .join('');
