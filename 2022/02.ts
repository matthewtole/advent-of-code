import {loadData, sum} from '../shared/utils';

export type DataType = Array<string>;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2022, 2)).split('\n').map(row => row.split(' '));

const HANDS = ['A', 'B', 'C'];
const SCORES = ['X', 'Y', 'Z'];

function roundScore(them: string, me: string): number {
  if (HANDS.indexOf(them) === SCORES.indexOf(me)) {
    return 3;
  }
  if (them === 'A' && me === 'Y') {
    return 6;
  }
  if (them === 'B' && me === 'Z') {
    return 6;
  }
  if (them === 'C' && me === 'X') {
    return 6;
  }
  return 0;
}

function handleValue(hand: string): number {
  return HANDS.includes(hand)
    ? 1 + HANDS.indexOf(hand)
    : 1 + SCORES.indexOf(hand);
}

export const part1 = (data: Array<DataType>): number =>
  sum(
    data.map(([them, me]) => {
      return roundScore(them, me) + handleValue(me);
    })
  );

export const part2 = (data: Array<DataType>): number => {
  return sum(
    data.map(([them, me]) => {
      switch (me) {
        case 'X':
          return 1 + ((3 + (HANDS.indexOf(them) - 1)) % 3);
        case 'Y':
          return 3 + 1 + HANDS.indexOf(them);
        case 'Z':
          return 6 + 1 + ((HANDS.indexOf(them) + 1) % 3);
        default:
          return 0;
      }
    })
  );
};
