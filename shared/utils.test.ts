import {
  countCharacters,
  loadData,
  max,
  min,
  product,
  sortNumbers,
  sum,
} from './utils';

describe('#loadData', () => {
  test('loads data file for a given year and puzzle', async () => {
    const data = await loadData(2000, 1);
    expect(data).toEqual('Hello');
  });

  test('rejects promise if file does not exist', async () => {
    return expect(loadData(2000, 2)).rejects.toMatch(
      'Cannot load data file for 2000:2'
    );
  });

  test.each([
    [[1, 2, 3], 6],
    [[], 0],
  ])('sum', (nums, total) => {
    expect(sum(nums)).toEqual(total);
  });

  test.each([
    [[1, 2, 3], 3],
    [[], 0],
  ])('max', (nums, total) => {
    expect(max(nums)).toEqual(total);
  });

  test.each([
    [[1, 2, 3], 1],
    [[], Number.MAX_SAFE_INTEGER],
  ])('min', (nums, total) => {
    expect(min(nums)).toEqual(total);
  });

  test.each([
    [[2, 4, 6], 48],
    [[], 1],
  ])('product', (nums, total) => {
    expect(product(nums)).toEqual(total);
  });

  test.each([
    ['a', {a: 1}],
    ['abc', {a: 1, b: 1, c: 1}],
    ['ababa', {a: 3, b: 2}],
    ['', {}],
  ])('countCharacters', (str, counts) => {
    expect(countCharacters(str)).toEqual(counts);
  });
});

test.each([
  [[3, 1, 2], true, [3, 2, 1]],
  [[3, 1, 2], false, [1, 2, 3]],
])('sortNumbers', (input, descending, output) => {
  expect(sortNumbers(input, descending)).toEqual(output);
});
