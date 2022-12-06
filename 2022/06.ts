import {loadData} from '../shared/utils';

export type DataType = string;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2022, 6)).split('');

function findUniqueSubsequence(
  sequence: Array<DataType>,
  length: number
): number {
  let marker: Array<string> = [];
  for (let i = 0; i < sequence.length; i += 1) {
    while (marker.includes(sequence[i])) {
      marker.shift();
    }
    marker = [...marker, sequence[i]];
    if (marker.length === length) {
      return i + 1;
    }
  }
  return -1;
}

export const part1 = (data: Array<DataType>): number => {
  return findUniqueSubsequence(data, 4);
};

export const part2 = (data: Array<DataType>): number => {
  return findUniqueSubsequence(data, 14);
};
