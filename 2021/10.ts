import {loadData} from '../shared/utils';

export type DataType = string;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2021, 10)).split('\n');

const OPENING_CHARS = '[(<{';
const CLOSING_CHARS = '])>}';

export const getFirstIllegalCharacter = (str: string): string | null => {
  const stack: Array<string> = [];
  for (const char of str.split('')) {
    if (OPENING_CHARS.includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== OPENING_CHARS[CLOSING_CHARS.indexOf(char)]) {
        return char;
      }
    }
  }
  return null;
};

export const getMissingCharacters = (str: string): Array<string> => {
  const stack: Array<string> = [];
  for (const char of str.split('')) {
    if (OPENING_CHARS.includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== OPENING_CHARS[CLOSING_CHARS.indexOf(char)]) {
        return [];
      }
    }
  }
  return stack
    .reverse()
    .map(char => CLOSING_CHARS[OPENING_CHARS.indexOf(char)]);
};

const CHAR_VALUES: Record<string, number> = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

export const part1 = (data: Array<DataType>): number =>
  data.reduce((sum, line) => {
    const char = getFirstIllegalCharacter(line);
    if (char == null) {
      return sum;
    }
    return sum + CHAR_VALUES[char];
  }, 0);

const CHAR_VALUES_2: Record<string, number> = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

export const part2 = (data: Array<DataType>): number => {
  const scores = data
    .map(line => {
      return getMissingCharacters(line).reduce((total, char) => {
        return total * 5 + CHAR_VALUES_2[char];
      }, 0);
    })
    .filter(score => score > 0);

  return scores.sort((a, b) => b - a)[Math.floor(scores.length / 2)];
};
