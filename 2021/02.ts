import {loadData, product} from '../shared/utils';

export type DataType = [string, number];

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2021, 2)).split('\n').map(row => {
    const [direction, distance] = row.split(' ');
    return [direction, Number(distance)];
  });

export const part1 = (data: Array<DataType>): number =>
  product(
    data.reduce(
      ([depth, position], movement) => {
        switch (movement[0]) {
          case 'forward':
            return [depth, position + movement[1]];
          case 'down':
            return [depth + movement[1], position];
          case 'up':
            return [depth - movement[1], position];
          /* istanbul ignore next */
          default:
            return [depth, position];
        }
      },
      [0, 0]
    )
  );

export const part2 = (data: Array<DataType>): number =>
  product(
    data
      .reduce(
        ([aim, depth, position], movement) => {
          switch (movement[0]) {
            case 'forward':
              return [aim, depth + aim * movement[1], position + movement[1]];
            case 'down':
              return [aim + movement[1], depth, position];
            case 'up':
              return [aim - movement[1], depth, position];
            /* istanbul ignore next */
            default:
              return [aim, depth, position];
          }
        },
        [0, 0, 0]
      )
      .slice(1)
  );
