import {loadData} from '../shared/utils';

export type DataType = Array<number>;

export const parseData = (data: string): Array<DataType> =>
  data.split('\n').map(line => line.trim().split('').map(Number));

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  parseData(await loadData(2021, 11));

const NEIGHBORS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const flash = (data: Array<DataType>, col: number, row: number): number => {
  data[row][col] = 10;
  NEIGHBORS.forEach(([c, r]) => {
    if (data[row + r]?.[col + c] == null) {
      return;
    }
    if (data[row + r][col + c] === 9) {
      flash(data, col + c, row + r);
    } else {
      data[row + r][col + c] = Math.min(data[row + r][col + c] + 1, 10);
    }
  });
};

export const step = (data: Array<DataType>): number => {
  for (let row = 0; row < data.length; row += 1) {
    for (let col = 0; col < data[row].length; col += 1) {
      if (data[row][col] === 9) {
        flash(data, col, row);
      } else {
        data[row][col] = Math.min(data[row][col] + 1, 10);
      }
    }
  }
  let flashes = 0;
  for (let row = 0; row < data.length; row += 1) {
    for (let col = 0; col < data[row].length; col += 1) {
      if (data[row][col] >= 10) {
        flashes++;
        data[row][col] = 0;
      }
    }
  }
  return flashes;
};

export const part1 = (data: Array<DataType>): number => {
  const clonedData = [...data.map(line => [...line])];
  let flashes = 0;
  for (let c = 0; c < 100; c += 1) {
    flashes += step(clonedData);
  }

  return flashes;
};

export const part2 = (data: Array<DataType>): number => {
  const clonedData = [...data.map(line => [...line])];
  let steps = 0;
  while (steps < 100000) {
    if (clonedData.every(row => row.every(o => o === 0))) {
      return steps;
    }
    step(clonedData);
    steps += 1;
  }
  return -1;
};
