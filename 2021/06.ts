import {loadData, sum} from '../shared/utils';

export type DataType = number;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2021, 6)).split(',').map(Number);

const simulateFish = (
  data: Array<DataType>,
  numDays: number
): Array<DataType> => {
  let fish = [...data];
  for (let day = 1; day <= numDays; day += 1) {
    let newFish = 0;
    fish = fish.map(f => {
      if (f === 0) {
        newFish += 1;
        return 6;
      }
      return f - 1;
    });
    fish = fish.concat(...new Array(newFish).fill(8));
  }
  return fish;
};

const countsOfFish = (fishes: Array<DataType>): Array<DataType> => {
  let counts: Array<number> = new Array(9).fill(0);
  for (const fish of fishes) {
    counts[fish] += 1;
  }
  return counts;
};

const combineCounts = (
  count1: Array<DataType>,
  count2: Array<DataType>
): Array<DataType> => {
  return count1.map((count, index) => count + count2[index]);
};

const multiplyCounts = (
  count: Array<DataType>,
  factor: number
): Array<DataType> => count.map(c => c * factor);

export const part1 = (data: Array<DataType>): number =>
  simulateFish(data, 80).length;

export const part2 = (data: Array<DataType>): number => {
  const NUM_CHUNKS = 8;
  const CHUNK_SIZE = 256 / NUM_CHUNKS;

  const cache = new Array(9)
    .fill([0])
    .map((_, index) => simulateFish([index], CHUNK_SIZE));

  let counts = countsOfFish(data);

  for (let chunk = 0; chunk < NUM_CHUNKS; chunk += 1) {
    counts = counts.reduce(
      (currentCounts, count, index) =>
        combineCounts(
          currentCounts,
          multiplyCounts(countsOfFish(cache[index]), count)
        ),
      new Array(9).fill(0)
    );
  }

  return sum(counts);
};
