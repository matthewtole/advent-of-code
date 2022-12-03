import {loadData, sum} from '../shared/utils';

export type DataType = string;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2022, 3)).split('\n');

function throwIfUndefined<T>(value: T | undefined): T {
  /* istanbul ignore next */
  if (value === undefined) {
    throw new Error('Value is undefined');
  }
  return value;
}

function priority(char: string) {
  return char.charCodeAt(0) > 96
    ? char.charCodeAt(0) - 96
    : char.charCodeAt(0) - 64 + 26;
}

function splitBackpack(backpack: string): [string, string] {
  return [
    backpack.slice(0, backpack.length / 2),
    backpack.slice(backpack.length / 2),
  ];
}

function findCommonItem([first, ...rest]: Array<string>): string {
  return throwIfUndefined(
    first.split('').find(char => {
      return rest.every(other => other.includes(char));
    })
  );
}

export const part1 = (data: Array<DataType>): number => {
  return sum(data.map(item => priority(findCommonItem(splitBackpack(item)))));
};

export const part2 = (data: Array<DataType>): number => {
  let badges: Array<string> = [];
  for (let i = 0; i < data.length; i += 3) {
    badges.push(findCommonItem(data.slice(i, i + 3)));
  }
  return sum(badges.map(priority));
};
