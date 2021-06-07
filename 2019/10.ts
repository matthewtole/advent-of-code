import {loadData} from '../shared/utils';

/*
https://adventofcode.com/2019/day/7
*/

type Coordinate = [number, number];

/**
 * Given a map of space, return the coordinate of the asteroid that can
 * see the most number of other asteroids.
 */
export const part1 = (map: Array<Array<string>>): [Coordinate, number] => {
  const asteroids = getAsteroids(map);
  let bestAsteroid = asteroids[0]!;
  let max = 0;

  asteroids.forEach(asteroid => {
    const directions: Array<string> = [];
    asteroids.forEach(a => {
      if (a[0] === asteroid[0] && a[1] === asteroid[1]) {
        return;
      }
      const dir = angleBetween(asteroid, a).toString();
      if (!directions.includes(dir)) {
        directions.push(dir);
      }
    });
    if (directions.length > max) {
      max = directions.length;
      bestAsteroid = asteroid;
    }
  });
  return [bestAsteroid, max];
};

/**
 * Given a map of space and the coordinate of the laser,
 * return the order in which the asteroids will get destroyed.
 */
export const part2 = (
  map: Array<Array<string>>,
  laser: Coordinate
): Array<Coordinate> => {
  const asteroids = getAsteroids(map);
  let asteroidsByAngle: {[angle: string]: Array<Coordinate>} = {};
  asteroids
    .filter(a => a[0] !== laser[0] || a[1] !== laser[1])
    .forEach(asteroid => {
      const angle = angleBetween(laser, asteroid);
      asteroidsByAngle = {
        ...asteroidsByAngle,
        [angle]: [...(asteroidsByAngle[angle] || []), asteroid],
      };
    });

  const orderedAsteroids: Array<Coordinate> = [];

  const sortedAngles = Object.keys(asteroidsByAngle)
    .map(angle => parseFloat(angle))
    .sort((a, b) => {
      return a < b ? -1 : 1;
    });

  let index = 0;
  while (sortedAngles.some(angle => asteroidsByAngle[angle]!.length)) {
    const asteroid = asteroidsByAngle[sortedAngles[index]!]!.sort((a, b) => {
      if (distanceBetween(laser, a) < distanceBetween(laser, b)) {
        return -1;
      }
      return 1;
    }).shift();
    if (asteroid) {
      orderedAsteroids.push(asteroid);
    }
    index = (index + 1) % sortedAngles.length;
  }

  return orderedAsteroids;
};

/**
 * Calculate the angle in degrees between two coordinates, where 0 is straight up.
 */
export const angleBetween = (a: Coordinate, b: Coordinate): number => {
  const dir = [b[0] - a[0], b[1] - a[1]];
  return (Math.atan2(dir[0]!, -1 * dir[1]!) * (180 / Math.PI) + 360) % 360;
};

/**
 * Return the Manhattan distance between two coordinates
 */
export const distanceBetween = (a: Coordinate, b: Coordinate): number => {
  return Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]);
};

/**
 * Given a 2D array of space, return the coordinates for all of the asteroids.
 */
const getAsteroids = (map: Array<Array<string>>): Array<Coordinate> => {
  const asteroids: Array<Coordinate> = [];
  for (let y = 0; y < map.length; y += 1) {
    for (let x = 0; x < map[y]!.length; x += 1) {
      if (map[y]![x]! === '#') {
        asteroids.push([x, y]);
      }
    }
  }
  return asteroids;
};

/**
 * Converts a raw map string into a 2D array of cells
 */
export const parseMap = (data: string): Array<Array<string>> => {
  return data
    .trim()
    .split('\n')
    .map(row => row.split(''));
};

/**
 * Parse the puzzle input file ready for processing
 */
/* istanbul ignore next */
export const parse = async (): Promise<Array<Array<string>>> =>
  parseMap(await loadData(2019, 10));
