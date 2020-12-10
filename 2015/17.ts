import {loadData} from '../shared/utils';

/**
 * Given an array of elements, generate all of the possible combinations of the elements
 */
export function generatePermutations<T>(input: Array<T>): Array<Array<T>> {
  const n = Math.pow(2, input.length);
  const permutations: Array<Array<T>> = [];
  for (let i = 0; i < n; i += 1) {
    permutations.push(
      input.filter((_, index) => Boolean(i & Math.pow(2, index)))
    );
  }
  return permutations.filter(a => a.length > 0);
}

/**
 * Given an array of numbers, generate all of the possible combinations
 * that sum up to a given total.
 */
const generatePermutationsForTotal = (
  input: Array<number>,
  total: number
): Array<Array<number>> => {
  return generatePermutations(input).filter(
    permutation => permutation.reduce((t, p) => p + t, 0) === total
  );
};

/**
 * Given an array of numbers and a total,
 * return the total number of combinations that sum up to the total.
 */
export const part1 = (input: Array<number>, total = 150): number =>
  generatePermutationsForTotal(input, total).length;

/**
 * Given an array of numbers and a total,
 * find the smallest number of elements that sum to the total,
 * and then return the total number of combinations of that length
 */
export const part2 = (input: Array<number>, total = 150): number => {
  const permutations = generatePermutationsForTotal(input, total);
  const minimum = permutations.reduce(
    (min, permutation) => Math.min(min, permutation.length),
    Infinity
  );
  return permutations.filter(permutation => permutation.length === minimum)
    .length;
};

/* istanbul ignore next */
export const parse = async () =>
  (await loadData(2015, 17)).split('\n').map(line => Number(line));
