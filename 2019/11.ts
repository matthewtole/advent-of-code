import {IntcodeComputer} from './intcode';
import {parseIntcode} from './utils';

/*
https://adventofcode.com/2019/day/2
*/

/**
 * Run an Intcode computer that paints white and black squares.
 * Returns a map of the squares that have been painted.
 */
const PaintingRobot = (
  initialConditions: {[coordinate: string]: number},
  program: Array<number>
): {[coordinate: string]: number} => {
  let pos = [0, 0];
  let direction = 'N';
  const paintedPanels: {[coordinate: string]: number} = initialConditions;

  const currentPanelColor = () => {
    return paintedPanels[pos.join('|')] || 0;
  };

  const turn = (turnRight: number) => {
    switch (direction) {
      case 'N':
        direction = turnRight ? 'E' : 'W';
        break;
      case 'E':
        direction = turnRight ? 'S' : 'N';
        break;
      case 'S':
        direction = turnRight ? 'W' : 'E';
        break;
      case 'W':
        direction = turnRight ? 'N' : 'S';
        break;
    }
  };

  const move = () => {
    switch (direction) {
      case 'N':
        pos = [pos[0], pos[1] - 1];
        break;
      case 'E':
        pos = [pos[0] + 1, pos[1]];
        break;
      case 'S':
        pos = [pos[0], pos[1] + 1];
        break;
      case 'W':
        pos = [pos[0] - 1, pos[1]];
        break;
    }
  };

  const computer = new IntcodeComputer(program);
  computer.addInput(currentPanelColor());
  while (!computer.isHalted()) {
    paintedPanels[pos.join('|')] = computer.run();
    turn(computer.run());
    move();
    computer.addInput(currentPanelColor());
  }

  return paintedPanels;
};

/**
 * Run a painting robot program and count the number of painted squares
 */
export const part1 = (program: Array<number>): number => {
  return Object.keys(PaintingRobot({}, program)).length;
};

/**
 * Run a painting robot program and return a printable output.
 */
export const part2 = (program: Array<number>): string => {
  const result = PaintingRobot({'0|0': 1}, program);
  const minX = Object.keys(result).reduce(
    (min, coord) => Math.min(min, parseInt(coord.split('|')[0])),
    Infinity
  );
  const minY = Object.keys(result).reduce(
    (min, coord) => Math.min(min, parseInt(coord.split('|')[1])),
    Infinity
  );
  const maxX = Object.keys(result).reduce(
    (max, coord) => Math.max(max, parseInt(coord.split('|')[0])),
    -Infinity
  );
  const maxY = Object.keys(result).reduce(
    (max, coord) => Math.max(max, parseInt(coord.split('|')[1])),
    -Infinity
  );

  let painting = '';
  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      painting += result[`${x}|${y}`] ? '■' : ' ';
    }
    painting += '\n';
  }
  return painting;
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = (): Promise<Array<number>> => parseIntcode(11);
