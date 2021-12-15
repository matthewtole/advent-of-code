import {countCharacters, loadData} from '../shared/utils';

export type DataType = [string, Array<[string, string]>];

/* istanbul ignore next */
export const parse = async (): Promise<DataType> => {
  const [template, rules] = (await loadData(2021, 14)).split('\n\n');
  return [
    template,
    rules.split('\n').map(rule => rule.split(' -> ') as [string, string]),
  ];
};

export const step = (input: string, rules: Array<[string, string]>): string => {
  let output = '';
  for (let index = 0; index < input.length; index++) {
    output += input.charAt(index);
    const pair = input.substring(index, index + 2);
    const rule = rules.find(r => r[0] === pair);
    if (rule) {
      output += rule[1];
    }
  }
  return output;
};

export const part1 = ([input, rules]: DataType): number => {
  let polymer = input;
  for (let index = 0; index < 10; index++) {
    polymer = step(polymer, rules);
  }
  const counts = countCharacters(polymer);
  const sortedCounts = Object.values(counts).sort((a, b) => b - a);
  return sortedCounts[0] - sortedCounts[sortedCounts.length - 1];
};

export const part2 = ([input, rules]: DataType): number => {
  let polymer = input;
  // for (let index = 0; index < 40; index++) {
  //   polymer = step(polymer, rules);
  // }
  const counts = countCharacters(polymer);
  const sortedCounts = Object.values(counts).sort((a, b) => b - a);
  return sortedCounts[0] - sortedCounts[sortedCounts.length - 1];
};
