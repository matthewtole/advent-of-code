import {loadData} from '../shared/utils';

export const part1 = (input: Array<string>): number => {
  return input.filter(password => {
    return (
      /([a-z])\1/.test(password) &&
      !/(ab|cd|pq|xy)/.test(password) &&
      password.length - password.replace(/[aeiou]/g, '').length >= 3
    );
  }).length;
};

export const part2 = (input: Array<string>): number => {
  return input.filter(password => {
    return /([a-z]{2}).*\1/.test(password) && /([a-z]).\1/.test(password);
  }).length;
};

/* istanbul ignore next */
export const parse = async () => (await loadData(2015, 5)).split('\n');
