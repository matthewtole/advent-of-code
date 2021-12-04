import {sum} from '../2021/utils';
import {loadData} from '../shared/utils';

export type DataType = Array<number>;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2016, 3)).split('\n').map(row =>
    row
      .split(/\ +/)
      .filter(piece => piece.trim().length > 0)
      .map(Number)
  );

export const isValidTriangle = (sides: DataType): boolean => {
  return sides.every(
    (side, index) => side < sum(sides.filter((_, i) => i !== index))
  );
};

export const convertData = (data: Array<DataType>): Array<DataType> => {
  const convertedData: Array<DataType> = [];
  for (let i = 0; i < data.length; i += 3) {
    for (let j = 0; j < 3; j += 1) {
      convertedData.push(data.slice(i, i + 3).map(d => d[j]));
    }
  }
  return convertedData;
};

export const part1 = (data: Array<DataType>): number =>
  data.filter(isValidTriangle).length;

export const part2 = (data: Array<DataType>): number =>
  convertData(data).filter(isValidTriangle).length;
