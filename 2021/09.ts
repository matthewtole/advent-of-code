import {loadData, product, sum} from '../shared/utils';

export type DataType = Array<number>;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2021, 9)).split('\n').map(row => row.split('').map(Number));

const getNeighbors = (
  data: Array<DataType>,
  row: number,
  col: number
): Array<number> => {
  return [
    data[row - 1]?.[col - 1],
    data[row + 0]?.[col - 1],
    data[row + 1]?.[col - 1],
    data[row - 1]?.[col + 0],
    data[row + 1]?.[col + 0],
    data[row - 1]?.[col + 1],
    data[row + 0]?.[col + 1],
    data[row + 1]?.[col + 1],
  ].filter(n => n != null);
};

export const part1 = (data: Array<DataType>): number => {
  const lowPoints: Array<number> = [];
  for (let row = 0; row < data.length; row += 1) {
    for (let col = 0; col < data[row].length; col += 1) {
      const neighbors = getNeighbors(data, row, col);
      if (neighbors.every(n => n > data[row][col])) {
        lowPoints.push(data[row][col]);
      }
    }
  }
  return sum(lowPoints) + lowPoints.length;
};

export function getBasin(
  data: Array<DataType>,
  col: number,
  row: number,
  basin: Array<string>
): Array<string> {
  if (data[row]?.[col] == null) {
    return [];
  }

  if (basin.includes([row, col].join(','))) {
    return [];
  }

  if (data[row][col] === 9) {
    return [];
  }

  let newBasin = [...basin, [row, col].join(',')];

  newBasin = newBasin.concat(getBasin(data, col - 1, row, newBasin));
  newBasin = newBasin.concat(getBasin(data, col + 1, row, newBasin));
  newBasin = newBasin.concat(getBasin(data, col, row - 1, newBasin));
  newBasin = newBasin.concat(getBasin(data, col, row + 1, newBasin));

  return [...new Set(newBasin)];
}

export const part2 = (data: Array<DataType>): number => {
  const lowPoints: Array<[number, number]> = [];
  for (let row = 0; row < data.length; row += 1) {
    for (let col = 0; col < data[row].length; col += 1) {
      const neighbors = getNeighbors(data, row, col);
      if (neighbors.every(n => n > data[row][col])) {
        lowPoints.push([row, col]);
      }
    }
  }
  const basins: Array<number> = lowPoints.map(([row, col]) => {
    return getBasin(data, col, row, []).length;
  });
  return product(basins.sort((a, b) => b - a).slice(0, 3));
};
