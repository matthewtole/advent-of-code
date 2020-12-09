import {decodeStr, encodeStr, part1, part2} from './08';

describe('Day 7', () => {
  test('decodeStr', () => {
    expect(decodeStr('""')).toEqual('');
    expect(decodeStr('"\\x27"')).toEqual("'");
  });

  test('encodeStr', () => {
    expect(encodeStr('""')).toEqual('"\\"\\""');
    expect(encodeStr('"\\x27"')).toEqual('"\\"\\\\x27\\""');
  });

  test('Part 1', () => {
    expect(part1(['""', '"abc"', '"aaa\\"aaa"', '"\\x27"'])).toEqual(12);
  });

  test('Part 2', () => {
    expect(part2(['""', '"abc"', '"aaa\\"aaa"', '"\\x27"'])).toEqual(19);
  });
});
