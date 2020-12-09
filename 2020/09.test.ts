import {doesArrayContainSum, part1, part2} from './09';

describe('Day 9', () => {
  test('isSumOfPrevious', () => {
    expect(doesArrayContainSum([35, 20, 15, 25, 47, 40], 62)).toEqual(true);
    expect(doesArrayContainSum([95, 102, 117, 150, 182], 127)).toEqual(false);
  });

  const numbers = '35 20 15 25 47 40 62 55 65 95 102 117 150 182 127 219 299 277 309 576'
    .split(' ')
    .map(n => Number(n));

  test('Part 1', () => {
    expect(part1(numbers, 5)).toEqual(127);
  });

  test('Part 2', () => {
    expect(part2(numbers, 5)).toEqual(62);
  });
});
