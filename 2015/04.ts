import {hash} from 'spark-md5';

export const part1 = (input: string): number => {
  let number = 1;
  while (true) {
    if (hash(`${input}${number}`).startsWith('00000')) {
      return number;
    }
    number++;
  }
  return -1;
};

export const part2 = (input: string): number => {
  let number = 1;
  while (true) {
    if (hash(`${input}${number}`).startsWith('000000')) {
      return number;
    }
    number++;
  }
  return -1;
};
