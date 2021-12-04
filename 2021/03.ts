import {loadData} from '../shared/utils';

type Data = string;

/* istanbul ignore next */
export const parse = async (): Promise<Array<Data>> =>
  (await loadData(2021, 3)).split('\n');

function mostCommonDigit(data: Array<Data>, index: number): 0 | 1 {
  return data.reduce((total, row) => total + Number(row.substr(index, 1)), 0) <
    data.length / 2
    ? 0
    : 1;
}

function leastCommonDigit(data: Array<Data>, index: number): 0 | 1 {
  return data.reduce((total, row) => total + Number(row.substr(index, 1)), 0) >=
    data.length / 2
    ? 0
    : 1;
}

export const part1 = (data: Array<Data>): number => {
  return (
    parseInt(
      new Array(data[0].length)
        .fill(0)
        .map((_, index) => mostCommonDigit(data, index))
        .join(''),
      2
    ) *
    parseInt(
      new Array(data[0].length)
        .fill(0)
        .map((_, index) => leastCommonDigit(data, index))
        .join(''),
      2
    )
  );
};

export const part2 = (data: Array<Data>): number => {
  let data2 = [...data];
  let index = 0;
  while (data2.length > 1) {
    const digit = mostCommonDigit(data2, index);
    data2 = data2.filter(row => row[index] === `${digit}`);
    index += 1;
  }

  let data3 = [...data];
  index = 0;
  while (data3.length > 1) {
    const digit = leastCommonDigit(data3, index);
    data3 = data3.filter(row => row[index] === `${digit}`);
    index += 1;
  }
  return parseInt(data2[0], 2) * parseInt(data3[0], 2);
};
