import {loadData} from '../shared/utils';

export const part1 = (input: string): number => {
  return input.split('').reduce((floor, b) => floor + (b === '(' ? 1 : -1), 0);
};

export const part2 = (input: string): number => {
  return (
    input
      .split('')
      .findIndex((_, index) => part1(input.slice(0, index + 1)) < 0) + 1
  );
};

/* istanbul ignore next */
export const parse = () => loadData(2015, 1);
