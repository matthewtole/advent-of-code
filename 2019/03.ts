import * as fs from 'fs';

/**
 * https://adventofcode.com/2019/day/4
 */

/**
 * Given the paths of two wires, return the Manhattan distance
 * from their closest point of intersection to the point of origin
 */
export const part1 = (wire1: Array<string>, wire2: Array<string>): number => {
  const points1 = generatePoints(wire1);
  const points2 = generatePoints(wire2);

  const intersections = findIntersections(points1, points2);
  return intersections.reduce((min: number, intesection: [number, number]) => {
    return Math.min(min, Math.abs(intesection[0]) + Math.abs(intesection[1]));
  }, Infinity);
};

/**
 * Given the paths of two wires, return the Manhattan distance
 * from their point of intersection to the point of origin,
 * for the intersection that they both reached first.
 */
export const part2 = (wire1: Array<string>, wire2: Array<string>): number => {
  const points1 = generatePoints(wire1);
  const points2 = generatePoints(wire2);

  const intersections = findIntersectionsWithLength(points1, points2);
  return (
    intersections.reduce((min: number, intesection: [number, number]) => {
      return Math.min(min, intesection[0] + intesection[1]);
    }, Infinity) + 2
  );
};

/**
 * Given a path of a wire, generate an array of every coordinate that the wire passes through.
 */
export const generatePoints = (
  wire: Array<string>
): Array<[number, number]> => {
  const points: Array<[number, number]> = [];
  let currentPosition: [number, number] = [0, 0];

  wire.forEach(segment => {
    const dir = segment[0];
    const length = parseInt(segment.substr(1));

    switch (dir) {
      case 'L':
        for (let i = 0; i < length; i += 1) {
          currentPosition = [currentPosition[0] - 1, currentPosition[1]];
          points.push([...currentPosition]);
        }
        break;
      case 'R':
        for (let i = 0; i < length; i += 1) {
          currentPosition = [currentPosition[0] + 1, currentPosition[1]];
          points.push([...currentPosition]);
        }
        break;
      case 'U':
        for (let i = 0; i < length; i += 1) {
          currentPosition = [currentPosition[0], currentPosition[1] + 1];
          points.push([...currentPosition]);
        }
        break;
      case 'D':
        for (let i = 0; i < length; i += 1) {
          currentPosition = [currentPosition[0], currentPosition[1] - 1];
          points.push([...currentPosition]);
        }
        break;
    }
  });
  return points;
};

/**
 * Given two lists of coordinates, return all of the coordinates where they intersect
 */
export const findIntersections = (
  points1: Array<[number, number]>,
  points2: Array<[number, number]>
): Array<[number, number]> => {
  return points1.filter(p1 => {
    return points2.some(p2 => p2[0] === p1[0] && p1[1] === p2[1]);
  });
};

/**
 * Given two lists of coordinates, for each coordinate where they intersect,
 * return the length of each wire at that intersection.
 */
export const findIntersectionsWithLength = (
  points1: Array<[number, number]>,
  points2: Array<[number, number]>
): Array<[number, number]> => {
  const intersections: Array<[number, number]> = [];
  points1.map((p1, i1) => {
    const i2 = points2.findIndex(
      (p2, i2) => p2[0] === p1[0] && p1[1] === p2[1]
    );
    if (i2 >= 0) {
      intersections.push([i1, i2]);
    }
  });
  return intersections;
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = (): Promise<Array<Array<string>>> => {
  return new Promise((resolve, reject) => {
    fs.readFile('./2019/data/03.txt', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(
        data
          .toString()
          .split('\n')
          .map(wire => wire.split(','))
      );
    });
  });
};
