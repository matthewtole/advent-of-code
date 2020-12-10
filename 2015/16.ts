import {loadData} from '../shared/utils';

const properties: {[key: string]: number} = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

export const part1 = (sues: Array<{[key: string]: number}>): number => {
  return (
    sues.findIndex(sue => {
      return Object.keys(sue).every(key => sue[key] === properties[key]);
    }) + 1
  );
};

export const part2 = (sues: Array<{[key: string]: number}>): number => {
  return (
    sues.findIndex(sue => {
      return Object.keys(sue).every(key => {
        switch (key) {
          case 'cats':
          case 'trees':
            return sue[key] > properties[key];
          case 'pomeranians':
          case 'goldfish':
            return sue[key] < properties[key];
          default:
            return sue[key] === properties[key];
        }
      });
    }) + 1
  );
};

/* istanbul ignore next */
export const parse = async () =>
  (await loadData(2015, 16)).split('\n').map(line => {
    const res = /^Sue \d+: (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)$/i.exec(
      line
    )!;
    return {
      [res[1]]: Number(res[2]),
      [res[3]]: Number(res[4]),
      [res[5]]: Number(res[6]),
    };
  });
