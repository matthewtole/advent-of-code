import {loadData} from '../shared/utils';

/**
 * Given an array of a numbers, and a single number,
 * calculate if there are two elements in the array that sum to the given number.
 */
export const doesArrayContainSum = (
  previous: Array<number>,
  number: number
): boolean => {
  for (let a of previous) {
    for (let b of previous.slice(1)) {
      if (a + b === number) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Given an array and the start and end indices,
 * return the sum of that slice of the array.
 */
const sumRange = (
  numbers: Array<number>,
  start: number,
  end: number
): number => {
  return numbers.slice(start, end + 1).reduce((sum, n) => sum + n, 0);
};

/**
 * Given an array of numbers, and an optional window size,
 * return the first number in the array that is not the sum of two elements in the previous X elements,
 * where X is the window size.
 */
export const part1 = (input: Array<number>, windowSize = 25): number => {
  let previous = input.slice(0, windowSize);
  let remaining = input.slice(windowSize);
  while (remaining.length) {
    const next = remaining.shift()!;
    if (!doesArrayContainSum(previous, next)) {
      return next;
    }
    previous = [...previous.slice(1), next];
  }
  return -1;
};

/**
 * Using the result of part 1, find the sum of the smallest and largest values
 * in the continous run of numbers that sum to that value.
 */
export const part2 = (input: Array<number>, width = 25): number => {
  const total = part1(input, width);
  let start = 0;
  let end = 1;
  while (start < input.length) {
    let sum = 0;
    while ((sum = sumRange(input, start, end)) < total) {
      end += 1;
    }
    if (sum === total) {
      return (
        Math.min(...input.slice(start, end + 1)) +
        Math.max(...input.slice(start, end + 1))
      );
    }
    start += 1;
    end = start + 1;
  }
  return -1;
};

/* istanbul ignore next */
export const parse = async () =>
  (await loadData(2020, 9)).split('\n').map(line => parseInt(line, 10));
