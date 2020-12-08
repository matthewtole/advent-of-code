import {loadData} from '../shared/utils';

/*
https://adventofcode.com/2020/day/4
*/

type Passport = {[key: string]: string};

const validators: {[key: string]: (data: string) => boolean} = {
  byr: (data: string) => {
    const year = parseInt(data, 10);
    return year >= 1920 && year <= 2002;
  },
  iyr: (data: string) => {
    const year = parseInt(data, 10);
    return year >= 2010 && year <= 2020;
  },
  eyr: (data: string) => {
    const year = parseInt(data, 10);
    return year >= 2020 && year <= 2030;
  },
  hgt: (data: string) => {
    const height = /([0-9]*)(cm|in)/.exec(data);
    /* istanbul ignore next */
    if (!height) {
      return false;
    }
    return (
      (height[2] === 'cm' &&
        parseInt(height[1], 10) >= 150 &&
        parseInt(height[1], 10) <= 193) ||
      (height[2] === 'in' &&
        parseInt(height[1], 10) >= 59 &&
        parseInt(height[1], 10) <= 76)
    );
  },
  hcl: (data: string) => {
    return /^\#[0-9a-f]{6}$/.test(data);
  },
  ecl: (data: string) => {
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(data);
  },
  pid: (data: string) => {
    return /^[0-9]{9}$/.test(data);
  },
  cid: () => {
    return true;
  },
};

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

export const part1 = (input: Array<Passport>): number =>
  input.filter(hasRequiredFields).length;

export const part2 = (input: Array<Passport>): any =>
  input.filter(
    passport => hasValidFields(passport) && hasRequiredFields(passport)
  ).length;

export const hasRequiredFields = (passport: Passport): boolean =>
  requiredFields.every(f => Object.keys(passport).includes(f));

export const hasValidFields = (passport: Passport): boolean => {
  return Object.keys(passport).every(field => {
    return validators[field](passport[field]);
  });
};

/**
 * Parse the puzzle input file ready for processing
 */

export const parsePassport = (input: string): Passport => {
  const passport: Passport = {};
  input
    .trim()
    .replace(/\n/g, ' ')
    .split(' ')
    .forEach(item => {
      const bits = item.split(':');
      passport[bits[0]] = bits[1];
    });
  return passport;
};

export const parsePassports = (input: string): Array<Passport> =>
  input.split('\n\n').map(parsePassport);

/* istanbul ignore next */
export const parse = async (): Promise<Array<Passport>> =>
  parsePassports(await loadData(2020, 4));
