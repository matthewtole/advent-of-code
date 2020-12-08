import {loadData} from '../shared/utils';

// -1  0   0   0
// 0   1   0   0
// 1   0   1   0
// 2  -1   1   1
// 3   0   0   1
// 4   1   0   1
// 5   0  -1   0
// 6  -1  -1   0
// 7   0   0   0
// 8   1   0   -1
// const basePattern = [0, 1, 0, -1];

export const part1 = (input: Array<number>): string => {
  let currentSequence = [...input];
  const length = currentSequence.length;

  for (let loop = 0; loop < 100; loop += 1) {
    currentSequence = currentSequence.map((_, i) => {
      let value = 0;
      for (let index = 0; iin)
      // for (let p = i; p < length; p += i + 1) {
      //   value -= currentSequence[p];
      // }
      // for (let p = 3 * (i + 1) - 1; p < length; p += i + 1) {
      //   value -= currentSequence[p];
      // }
      // value =
      //   Math.abs(
      //     currentSequence.reduce((sum, num, index) => {
      //       const pos = Math.floor((index + 1) / (i + 1)) % 4;
      //       if (pos % 2 === 0) {
      //         return sum;
      //       }
      //       if (pos === 1) {
      //         return sum + num;
      //       }
      //       return sum - num;
      //     }, 0)
      //   ) % 10;
      return value % 10;
      // return (
    });
  }
  return currentSequence.slice(0, 8).join('');
};

export const part2 = (input: Array<number>): string => {
  let currentSequence = [
    ...input
      .join('')
      .repeat(10000)
      .split('')
      .map(i => parseInt(i, 10)),
  ];
  const sequenceSize = currentSequence.length;
  for (let loop = 0; loop < 100; loop += 1) {
    console.log(loop);
    const newSequence: Array<number> = [];
    for (let i = 0; i < sequenceSize; i += 1) {
      let value = 0;
      console.time('loop');
      // for (let pos = )
      //   for (let index = sequenceSize; index >= 0; index--) {
      //     const pos = Math.floor((index + 1) / (i + 1)) % 4;
      //     if (pos % 2 === 0) {
      //       continue;
      //     } else if (pos === 1) {
      //       value += currentSequence[index];
      //     } else {
      //       value -= currentSequence[index];
      //     }
      //     // value += currentSequence[index] * getPatternValue(i + 1, index);
      //   }
      console.timeEnd('loop');
      newSequence.push(value);
    }
    currentSequence = newSequence;
  }
  const offset = parseInt(input.slice(0, 7).join(''), 10);
  return currentSequence.slice(offset, offset + 8).join('');
};

export const generatePattern = (
  length: number,
  position: number
): Array<number> => {
  const basePattern = [0, 1, 0, -1];
  const pattern = [];
  let patternIndex = 0;
  while (pattern.length < length + 1) {
    for (let p = 0; p < position; p += 1) {
      pattern.push(basePattern[patternIndex]);
    }
    patternIndex = (patternIndex + 1) % basePattern.length;
  }
  return pattern.slice(1, length + 1);
};

export const getPatternValue = (position: number, offset: number) => {
  const basePattern = [0, 1, 0, -1];
  if (position === 1) {
    return basePattern[(offset + 1) % 4];
  }

  /**
   * 0  0
   * 1  0
   * 2  1
   * 3  1
   * 4  1
   * 5  2
   * 6  2
   * 7  2
   * 8  3
   * 9  3
   */

  return basePattern[Math.floor((offset + 1) / position) % 4];
};

export const parse = async () =>
  (await loadData(2019, 16)).split('').map(i => parseInt(i, 10));
