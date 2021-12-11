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

const flash = (data: Array<DataType>, col: number, row: number): void => {
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

const step = (_data: Array<DataType>): Array<DataType> => {
  const data = [..._data.map(line => [...line])];
  for (let row = 0; row < data.length; row += 1) {
    for (let col = 0; col < data[row].length; col += 1) {
      if (data[row][col] === 9) {
        flash(data, col, row);
      } else {
        data[row][col] = Math.min(data[row][col] + 1, 10);
      }
    }
  }
  return data;
};

const countFlashes = (data: Array<DataType>): number => {
  const flashes = data.reduce(
    (flashes, line) =>
      line.reduce(
        (flashes, octopus) => flashes + (octopus === 0 ? 1 : 0),
        flashes
      ),
    0
  );
  return flashes;
};

const reset = (_data: Array<DataType>): Array<DataType> => {
  const data = [..._data.map(line => [...line])];
  for (let row = 0; row < data.length; row += 1) {
    for (let col = 0; col < data[row].length; col += 1) {
      if (data[row][col] >= 10) {
        data[row][col] = 0;
      }
    }
  }
  return data;
};

export const part1 = (data: Array<DataType>): number => {
  let clonedData = data;
  let flashes = 0;
  for (let c = 0; c < 100; c += 1) {
    clonedData = reset(step(clonedData));
    flashes += countFlashes(clonedData);
  }

  return flashes;
};

export const part2 = (data: Array<DataType>): number => {
  let clonedData = data;
  let steps = 0;
  while (steps < 100000) {
    if (clonedData.every(row => row.every(o => o === 0))) {
      return steps;
    }
    clonedData = reset(step(clonedData));
    steps += 1;
  }
  return -1;
};
