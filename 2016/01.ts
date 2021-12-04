import {sum} from '../2021/utils';
import {loadData} from '../shared/utils';

export type DataType = string;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2016, 1)).split(', ');

type Direction = 'N' | 'S' | 'E' | 'W';
type Position = [number, number];

const turn = (currentDirection: Direction, turnDirection: string) => {
  switch (currentDirection) {
    case 'N':
      return turnDirection == 'L' ? 'W' : 'E';
    case 'S':
      return turnDirection == 'L' ? 'E' : 'W';
    case 'W':
      return turnDirection == 'L' ? 'S' : 'N';
    case 'E':
      return turnDirection == 'L' ? 'N' : 'S';
  }
};

const move = (
  position: Position,
  direction: Direction,
  distance: number
): Position => {
  switch (direction) {
    case 'N':
      return [position[0], position[1] + distance];
    case 'S':
      return [position[0], position[1] - distance];
    case 'W':
      return [position[0] - distance, position[1]];
    case 'E':
      return [position[0] + distance, position[1]];
  }
};

export const part1 = (data: Array<DataType>): number => {
  return sum(
    data
      .reduce<[Position, Direction]>(
        ([position, direction], step) => {
          const newDirection = turn(direction, step.substr(0, 1));
          const newPosition = move(
            position,
            newDirection,
            Number(step.substr(1))
          );
          return [newPosition, newDirection];
        },
        [[0, 0], 'N']
      )[0]
      .map(Math.abs)
  );

  // return Math.abs(position[0]) + Math.abs(position[1]);
};

export const part2 = (data: Array<DataType>): number => {
  let locations = new Array<string>();
  let position: [number, number] = [0, 0];
  let direction: Direction = 'N';

  for (const step of data) {
    const dir = step.substr(0, 1);
    const distance = Number(step.substr(1));
    direction = turn(direction, dir);
    for (let d = 0; d < distance; d += 1) {
      position = move(position, direction, 1);
      if (locations.includes(position.join('|'))) {
        return Math.abs(position[0]) + Math.abs(position[1]);
      }
      locations.push(position.join('|'));
    }
  }
  return -1;
};
