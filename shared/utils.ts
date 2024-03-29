import {argv} from 'process';
import chalk from 'chalk';
import * as fs from 'fs';

/**
 * Parse the puzzle input file ready for processing
 */
export const loadData = (year: number, day: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `./${year}/data/${day.toString().padStart(2, '0')}.txt`,
      (err, data) => {
        if (err) {
          return reject(`Cannot load data file for ${year}:${day}`);
        }
        return resolve(data.toString());
      }
    );
  });
};

/**
 * Given an array of items, return all possible permuations of the values.
 */
export function permute<T>(permutation: Array<T>): Array<Array<T>> {
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

/* istanbul ignore next */
export async function execute(days: (() => Promise<void>)[]) {
  const day = argv[2] ? parseInt(argv[2]) : 0;
  if (day > 0) {
    await days[day - 1]?.();
  } else {
    for (const day of days) {
      await day();
      console.log();
    }
  }
}

/* istanbul ignore next */
export function runWithPerf<T>(fn: (data: T) => any, data: T): string {
  const before = performance.now();
  const res1 = fn(data);
  return `${chalk.yellow(res1)} [${chalk.cyanBright(
    (performance.now() - before).toPrecision(2)
  )}ms]`;
}

export const sum = (nums: Array<number>) =>
  nums.reduce((total, num) => total + num, 0);

export const max = (nums: Array<number>) =>
  nums.reduce((max, num) => Math.max(max, num), 0);

export const min = (nums: Array<number>) =>
  nums.reduce((min, num) => Math.min(min, num), Number.MAX_SAFE_INTEGER);

export const product = (nums: Array<number>) =>
  nums.reduce((total, num) => total * num, 1);

export const sortNumbers = (nums: Array<number>, descending: boolean = false) =>
  [...nums].sort((a, b) => (descending ? b - a : a - b));

export const countCharacters = (str: string): Record<string, number> => {
  return str
    .split('')
    .reduce(
      (count, char) => ({...count, [char]: (count[char] ?? 0) + 1}),
      {} as Record<string, number>
    );
};
