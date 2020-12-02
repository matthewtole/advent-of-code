import * as fs from 'fs';

/**
 * Given a list of planet pairs, count the total number of direct and indirect orbits.
 */
export const part1 = (orbits: Array<[string, string]>): number => {
  const planets = generatePlanets(orbits);

  const countOrbits = (planet: string): number => {
    let count = 0;
    let current = planets[planet];
    while (current) {
      count += 1;
      current = planets[current];
    }
    return count;
  };

  return Object.keys(planets).reduce(
    (count, planet) => countOrbits(planet) + count,
    0
  );
};

/**
 * Given a list of planet pairs, find the length of the shortest path
 * between the 'from' planet and the 'to' planet.
 */
export const part2 = (
  orbits: Array<[string, string]>,
  from: string,
  to: string
): number => {
  const planets = generatePlanets(orbits);

  let currentA = planets[from];
  let currentB = planets[to];
  let movesA = 0;
  let movesB = 0;

  while (currentA !== currentB) {
    currentB = planets[to];
    movesA += 1;
    movesB = 0;
    while (currentB) {
      currentB = planets[currentB];
      if (currentB === currentA) {
        break;
      }
      movesB += 1;
    }
    if (currentB !== currentA) {
      currentA = planets[currentA];
    }
  }

  return movesA + movesB;
};

const generatePlanets = (
  orbits: Array<[string, string]>
): {[key: string]: string} => {
  let planets: {[key: string]: string} = {};
  orbits.forEach(([inner, outer]) => {
    planets[outer] = inner;
  });
  return planets;
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = (): Promise<Array<[string, string]>> => {
  return new Promise((resolve, reject) => {
    fs.readFile('./2019/data/06.txt', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(
        data
          .toString()
          .split('\n')
          .map(line => {
            const bits = line.split(')');
            return [bits[0], bits[1]];
          })
      );
    });
  });
};
