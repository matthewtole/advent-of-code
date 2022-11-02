import {loadData} from '../shared/utils';

export type DataType = [string, string];

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2021, 12))
    .split('\n')
    .map(line => line.split('-') as [string, string]);

export const findConnections = (
  data: Array<DataType>,
  from: string
): Array<string> => {
  return data
    .filter(([a, b]) => a === from || b === from)
    .map(([a, b]) => (a === from ? b : a));
};

const isSmallCave = (name: string): boolean => name.toLowerCase() === name;

const findPathToExit = (
  data: Array<DataType>,
  current: string,
  path: Array<string>,
  paths: Array<Array<string>>
): Array<Array<string>> => {
  path = [...path, current];
  if (current === 'end') {
    return [...paths, path];
  }
  let connections = findConnections(data, current);
  for (let next of connections) {
    if (isSmallCave(next) && path.includes(next)) {
      continue;
    }
    paths = [...findPathToExit(data, next, path, paths)];
  }
  return paths;
};

const hasVisitedSmallCaveTwice = (path: Array<string>) => {
  return path.some(
    p => isSmallCave(p) && path.filter(p2 => p2 === p).length > 1
  );
};

const findDifferentPathToExit = (
  data: Array<DataType>,
  current: string,
  path: Array<string>,
  paths: Array<Array<string>>
): Array<Array<string>> => {
  path = [...path, current];
  if (current === 'end') {
    return [...paths, path];
  }
  let connections = findConnections(data, current);
  for (let next of connections) {
    if (next === 'start') {
      continue;
    }
    if (next !== 'end' && isSmallCave(next) && path.includes(next)) {
      if (hasVisitedSmallCaveTwice(path) || path.includes('end')) {
        continue;
      }
    }
    paths = [...findDifferentPathToExit(data, next, path, paths)];
  }
  return paths;
};

export const part1 = (data: Array<DataType>): number =>
  findPathToExit(data, 'start', [], []).length;

export const part2 = (data: Array<DataType>): number =>
  findDifferentPathToExit(data, 'start', [], []).length;
