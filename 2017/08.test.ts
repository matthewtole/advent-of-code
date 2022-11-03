import {part1, part2, parseData} from './08';

describe('Day 08', () => {
  const data = `b inc 5 if a > 1
  a inc 1 if b < 5
  c dec -10 if a >= 1
  c inc -20 if c == 10`
    .split('\n')
    .map(row => parseData(row.trim()));

  test.each([
    [0, ['b', 5, 'a', '>', 1]],
    [2, ['c', 10, 'a', '>=', 1]],
  ])(`parseData(data[%i])`, (row, expected) => {
    expect(data[row]).toEqual(expected);
  });

  test('Part 1', () => {
    const result = part1(data);
    expect(result).toEqual(1);
  });

  test('Part 2', () => {
    const result = part2(data);
    expect(result).toEqual(10);
  });
});
