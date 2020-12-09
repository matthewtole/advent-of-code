import {loadData} from '../shared/utils';

export const decodeStr = (str: string): string =>
  eval(str.replace(/\\/g, '\\'));

export const encodeStr = (str: string): string =>
  `"${str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

export const part1 = (input: Array<string>): number => {
  return (
    input.reduce((sum, string) => sum + string.length, 0) -
    input.reduce((sum, string) => sum + decodeStr(string).length, 0)
  );
};

export const part2 = (input: Array<string>): number => {
  return (
    input.reduce((sum, string) => sum + encodeStr(string).length, 0) -
    input.reduce((sum, string) => sum + string.length, 0)
  );
};

/* istanbul ignore next */
export const parse = async () => (await loadData(2015, 8)).split('\n');
