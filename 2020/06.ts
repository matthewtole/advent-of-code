import {loadData} from '../shared/utils';

/*
https://adventofcode.com/2020/day/6
*/

/**
 * Given a list of groups, return the sum of number of questions
 * that at least one person in each group answered yes to.
 */
export const part1 = (groups: Array<string>): number =>
  groups.reduce(
    (total, group) =>
      new Set(group.replace(/[\ |\n]/g, '').split('')).size + total,
    0
  );

/**
 * Given a list of groups, return the sum of number of questions
 * that everyone in the group answered yes to.
 */
export const part2 = (groups: Array<string>): number =>
  groups.reduce((total, group) => {
    const people = group.split('\n').map(person => person.split(''));
    return (
      total +
      people[0].filter(q => people.slice(1).every(p => p.includes(q))).length
    );
  }, 0);

/* istanbul ignore next */
export const parse = async () => (await loadData(2020, 6)).split('\n\n');
