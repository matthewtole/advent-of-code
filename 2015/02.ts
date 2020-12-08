import {loadData} from '../shared/utils';

export const part1 = (input: Array<[number, number, number]>): number => {
  return input.reduce((total, [w, h, l]) => {
    const surfaceArea = 2 * l * w + 2 * w * h + 2 * h * l;
    const extra = (w * h * l) / Math.max(w, h, l);
    return total + surfaceArea + extra;
  }, 0);
};

export const part2 = (input: Array<[number, number, number]>): number => {
  return input.reduce((total, [w, h, l]) => {
    const shortestDistance = 2 * (w + h + l - Math.max(w, h, l));
    const bow = w * h * l;
    return total + shortestDistance + bow;
  }, 0);
};

export const parsePresent = (input: string): [number, number, number] =>
  input.split('x').map(n => parseInt(n), 10) as [number, number, number];

/* istanbul ignore next */
export const parse = async () =>
  (await loadData(2015, 2)).split('\n').map(parsePresent);
