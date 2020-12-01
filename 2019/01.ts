import * as fs from 'fs';

export const part1 = (input: Array<number>): number => {
  return input.reduce((totalFuel, mass) => {
    const fuel = Math.floor(mass / 3) - 2;
    return totalFuel + fuel;
  }, 0);
};

export const part2 = (input: Array<number>): number => {
  return input.reduce((sum, mass) => {
    let totalFuel = 0;
    let remainingMass = mass;
    while (true) {
      const fuel = Math.floor(remainingMass / 3) - 2;
      if (fuel <= 0) {
        break;
      }
      totalFuel += fuel;
      remainingMass = fuel;
    }
    return sum + totalFuel;
  }, 0);
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = (): Promise<Array<number>> => {
  return new Promise((resolve, reject) => {
    fs.readFile('./2019/data/01.txt', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(
        data
          .toString()
          .split('\n')
          .map(line => parseInt(line, 10))
      );
    });
  });
};
