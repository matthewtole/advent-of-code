import {loadData} from '../shared/utils';
import assert from 'assert';

export type DataType = {patterns: Array<string>; output: Array<string>};

export const parseData = (data: string): Array<DataType> =>
  data.split('\n').map(line => {
    const [patterns, output] = line.split(' | ');
    return {patterns: patterns.split(' '), output: output.split(' ')};
  });

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  parseData(await loadData(2021, 8));

export const part1 = (data: Array<DataType>): number => {
  return data.reduce(
    (count, row) =>
      count + row.output.filter(p => [4, 7, 3, 2].includes(p.length)).length,
    0
  );
};

const DIGITS: Array<string> = [
  'abcefg',
  'cf',
  'acdeg',
  'acdfg',
  'bcdf',
  'abdfg',
  'abdefg',
  'acf',
  'abcdefg',
  'abcdfg',
];

const SEGMENTS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export const sortPattern = (pattern: string): string =>
  pattern.split('').sort().join('');

export const mapPattern = (pattern: string, mapping: string): string => {
  return sortPattern(
    pattern
      .split('')
      .map(c => SEGMENTS[mapping.indexOf(c)])
      .join('')
  );
};

export const isValidMapping = (
  mapping: string,
  patterns: Array<string>
): boolean => {
  return patterns.every(pattern =>
    DIGITS.includes(mapPattern(pattern, mapping))
  );
};

const unique = (str1: string, str2: string): string =>
  str1.length > str2.length
    ? str1
        .split('')
        .filter(c => !str2.includes(c))
        .join('')
    : unique(str2, str1);

export const findValidMapping = (patterns: Array<string>): null | string => {
  let mapping = new Array(7).fill('').map(() => '');

  const str1 = patterns.find(p => p.length === 2);
  assert(str1);

  const str4 = patterns.find(p => p.length === 4);
  assert(str4);

  const str7 = patterns.find(p => p.length === 3);
  assert(str7);

  const str6 = patterns.find(
    p => p.length === 6 && str7.split('').some(c => !p.includes(c))
  );
  assert(str6);

  const str0 = patterns.find(
    p =>
      p.length === 6 && p !== str6 && str4.split('').some(c => !p.includes(c))
  );
  assert(str0);

  const str8 = patterns.find(p => p.length === 7);
  assert(str8);
  const str9 = patterns.find(p => p.length === 6 && p !== str6 && p !== str0);
  assert(str9);
  const str3 = patterns.find(
    p => p.length === 5 && str1.split('').every(c => p.includes(c))
  );
  assert(str3);

  mapping[0] = unique(str7, str1);
  mapping[1] = unique(str9, str3);
  mapping[2] = unique(str8, str6);
  mapping[3] = unique(str8, str0);
  mapping[4] = unique(str8, str9);
  mapping[5] = unique(str1, mapping[2]);
  mapping[6] = unique(SEGMENTS.join(''), mapping.join(''));

  return mapping.join('');
};

export const getOutputValue = (
  output: Array<string>,
  mapping: string
): number => {
  return Number(
    output
      .map(pattern => DIGITS.indexOf(mapPattern(pattern, mapping)).toString())
      .join('')
  );
};

export const part2 = (data: Array<DataType>): number => {
  return data.reduce((sum, row) => {
    const mapping = findValidMapping(row.patterns);
    if (mapping == null) {
      console.error('Could not find a mapping.');
      return 0;
    }
    return sum + getOutputValue(row.output, mapping);
  }, 0);
};
