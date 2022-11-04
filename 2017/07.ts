import {loadData} from '../shared/utils';

export type DataType = [string, number, Array<string>];

export const parseData = (row: string): DataType => {
  const extracted = /^([a-z]+)\s\(([0-9]+)\)(\s->\s(([a-z]+)(,\s)?)*)?/.exec(
    row
  );
  if (extracted == null) {
    throw new Error('Failed to extract data from row');
  }
  return [
    extracted[1],
    Number(extracted[2]),
    extracted[3] == null ? [] : extracted[3].substring(4).split(', '),
  ];
};

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2017, 7)).split('\n').map(parseData);

export const part1 = (data: Array<DataType>): string => {
  const parents: Record<string, string> = {};
  for (const [name, _, children] of data) {
    for (const child of children) {
      parents[child] = name;
    }
  }
  for (const [name] of data) {
    if (!(name in parents)) {
      return name;
    }
  }
  throw new Error('Root not found :(');
};

export const part2 = (data: Array<DataType>): number => {
  return data.length;
};
