import {loadData} from '../shared/utils';

export type DataType = Array<string>;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2017, 4)).split('\n').map(row => row.split(' '));

export const part1 = (data: Array<DataType>): number => {
  return data.filter(phrase => {
    const words: Array<string> = [];
    for (let word of phrase) {
      if (words.includes(word)) {
        return false;
      }
      words.push(word);
    }
    return true;
  }).length;
};

export const part2 = (data: Array<DataType>): number => {
  return data.filter(phrase => {
    const words: Array<string> = [];
    for (let word of phrase) {
      const sortedWord = word.split('').sort().join('');
      if (words.includes(sortedWord)) {
        return false;
      }
      words.push(sortedWord);
    }
    return true;
  }).length;
};
