import {loadData, sum} from '../shared/utils';

export type DataType = number;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2021, 1)).split('\n').map(line => parseInt(line, 10));

export const part1 = (data: Array<DataType>) =>
  data.reduce(
    (increases, depth, index) => increases + (depth > data[index - 1] ? 1 : 0),
    0
  );

export const part2 = (data: Array<DataType>) => {
  return data.reduce((increases, _, index) => {
    if (index === 0 || index + 3 > data.length) {
      return increases;
    }
    return (
      increases +
      (sum(data.slice(index, index + 3)) > sum(data.slice(index - 1, index + 2))
        ? 1
        : 0)
    );
  }, 0);
};
