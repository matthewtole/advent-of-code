import {loadData} from '../shared/utils';

export type DataType = number;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2021, 7)).split(',').map(Number);

const costToAlign = (
  data: Array<number>,
  position: number,
  costCalculation: (distance: number) => number
) =>
  data.reduce(
    (cost, pos) => cost + costCalculation(Math.abs(pos - position)),
    0
  );

const lowestCostToAlign = (
  data: Array<number>,
  costCalculation: (distance: number) => number
): number => {
  const max = Math.max(...data);
  let lowestCost = Infinity;
  for (let p = 0; p < max; p += 1) {
    lowestCost = Math.min(costToAlign(data, p, costCalculation), lowestCost);
  }
  return lowestCost;
};

export const part1 = (data: Array<DataType>): number =>
  lowestCostToAlign(data, d => d);

export const part2 = (data: Array<DataType>): number => {
  const cache: Record<number, number> = {};
  return lowestCostToAlign(data, distance => {
    if (!(distance in cache)) {
      let cost = 0;
      for (let d = 1; d <= distance; d += 1) {
        cost += d;
      }
      cache[distance] = cost;
    }
    return cache[distance];
  });
};
