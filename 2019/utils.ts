import {loadData} from '../shared/utils';

/**
 * Given an array of items, return all possible permuations of the values.
 */
export function permute<T>(permutation: Array<T>) {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

/**
 * Parse a file of Intcode instructions
 */
/* istanbul ignore next */
export const parseIntcode = async (day: number): Promise<Array<number>> => {
  return (await loadData(2019, day)).split(',').map(line => parseInt(line, 10));
};
