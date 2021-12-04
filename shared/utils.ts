import {argv} from 'process';
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
export function permute<T>(permutation: Array<T | undefined>) {
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
