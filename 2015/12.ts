import {loadData} from '../shared/utils';

/**
 * Calculate the sum of all numbers in a JSON object.
 * If the ignoreValue parameter is included, ignore any objects with that as a value.
 */
const calculateDataSum = (input: any, ignoreValue?: string): number => {
  if (Array.isArray(input)) {
    return input.reduce(
      (sum, value) => sum + calculateDataSum(value, ignoreValue),
      0
    );
  }
  if (typeof input === 'object') {
    if (ignoreValue && Object.values(input).includes(ignoreValue)) {
      return 0;
    }
    return Object.values(input).reduce<number>(
      (sum, value) => sum + calculateDataSum(value, ignoreValue),
      0
    );
  }
  if (typeof input === 'number') {
    return input;
  }
  return 0;
};

export const part1 = (input: any): number => calculateDataSum(input);

export const part2 = (input: any): number => calculateDataSum(input, 'red');

export const parse = async () => JSON.parse(await loadData(2015, 12));
