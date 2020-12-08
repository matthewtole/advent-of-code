import {createHash} from 'crypto';

export const part1 = (input: string): number => {
  let number = 1;
  while (true) {
    if (
      createHash('md5')
        .update(`${input}${number}`)
        .digest('hex')
        .startsWith('00000')
    ) {
      return number;
    }
    number++;
  }
  return -1;
};

export const part2 = (input: string): number => {
  let number = 1;
  while (true) {
    if (
      createHash('md5')
        .update(`${input}${number}`)
        .digest('hex')
        .startsWith('000000')
    ) {
      return number;
    }
    number++;
  }
  return -1;
};
