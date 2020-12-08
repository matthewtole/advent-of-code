import {loadData} from '../shared/utils';

const getHouses = (input: string, houses: Set<string>) => {
  let house = [0, 0];
  input.split('').forEach(dir => {
    switch (dir) {
      case '^':
        house[1]--;
        break;
      case '<':
        house[0]--;
        break;
      case '>':
        house[0]++;
        break;
      case 'v':
        house[1]++;
        break;
    }
    houses.add(house.join('|'));
  });
};

export const part1 = (input: string): number => {
  const houses = new Set(['0|0']);
  getHouses(input, houses);
  return houses.size;
};

export const part2 = (input: string): number => {
  const houses = new Set(['0|0']);
  const santa = input
    .split('')
    .filter((_, index) => index % 2 == 0)
    .join('');
  const roboSanta = input
    .split('')
    .filter((_, index) => index % 2 == 1)
    .join('');
  getHouses(santa, houses);
  getHouses(roboSanta, houses);
  return houses.size;
};

/* istanbul ignore next */
export const parse = async () => await loadData(2015, 3);
