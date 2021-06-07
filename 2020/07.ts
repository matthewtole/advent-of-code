import {loadData} from '../shared/utils';

/*
https://adventofcode.com/2020/day/5
*/

type Bag = {[key: string]: BagContents};
type BagContents = {[key: string]: number};

/**
 * Given an array of bag descriptions, create an object representation
 */
export const parseBagData = (input: Array<string>): Bag => {
  return input.reduce((bags, bag) => {
    const [outer, inner] = bag.split(' contain ');
    return {
      ...bags,
      [outer!.replace(' bags', '')]: inner!
        .split(', ')
        .reduce((contents, bag) => {
          const res = /^(\d+)\ ([a-z\ ]+)\ bags?\.?$/.exec(bag);
          return res
            ? {
                ...contents,
                [res[2]!]: parseInt(res[1]!, 10),
              }
            : contents;
        }, {} as BagContents),
    };
  }, {} as Bag);
};

/**
 * Find all of the bags that can directly contain the given bag type
 */
const findImmediateContainers = (bags: Bag, type: string) => {
  return Object.keys(bags).filter(b => type in bags[b]!);
};

/**
 * Given an input of bag data,
 * count the different types of bags that can contain "shiny gold" bags.
 */
export const part1 = (bags: Bag) => {
  const goldContainers = new Set<string>([]);
  for (let bag in bags) {
    if (!('shiny gold' in bags[bag]!)) {
      continue;
    }
    /* istanbul ignore next */
    if (goldContainers.has(bag)) {
      continue;
    }
    let containers = [bag];
    while (containers.length) {
      const container = containers.pop()!;
      const parents = findImmediateContainers(bags, container);
      goldContainers.add(container);
      if (parents.length) {
        containers = [...containers, ...parents];
      }
    }
  }
  return goldContainers.size;
};

/**
 * Given an input of bag data, find the total number of bags needed
 * when holding a single "shiny gold" bag.
 */
export const part2 = (bags: Bag) => {
  let totalBagCount = 0;
  let bagsToCheck: Array<[string, number]> = [['shiny gold', 1]];
  while (bagsToCheck.length) {
    const [bag, count] = bagsToCheck.pop()!;
    totalBagCount = Object.keys(bags[bag]!).reduce((c, b) => {
      const bagCount = count * bags[bag]![b]!;
      bagsToCheck.push([b, bagCount]);
      return c + bagCount;
    }, totalBagCount);
  }
  return totalBagCount;
};

/* istanbul ignore next */
export const parse = async () =>
  parseBagData((await loadData(2020, 7)).split('\n').map(line => line));
