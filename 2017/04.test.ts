import {part1, part2} from './04';

describe('Day 04', () => {
  test('Part 1', () => {
    const result = part1([
      ['aa', 'bb', 'cc', 'dd', 'ee'],
      ['aa', 'bb', 'cc', 'dd', 'aa'],
      ['aa', 'bb', 'cc', 'dd', 'aaa'],
    ]);
    expect(result).toEqual(2);
  });

  test('Part 2', () => {
    const result = part2([
      ['abcde', 'fghij'],
      ['abcde', 'xyz', 'ecdab'],
      ['a', 'ab', 'abc', 'abd', 'abf', 'abj'],
      ['iiii', 'oiii', 'ooii', 'oooi', 'oooo'],
      ['oiii', 'ioii', 'iioi', 'iiio'],
    ]);
    expect(result).toEqual(3);
  });
});
