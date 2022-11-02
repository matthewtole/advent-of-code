import {
  getFirstIllegalCharacter,
  getMissingCharacters,
  part1,
  part2,
} from '../10';

describe('Day 9', () => {
  const testData = [
    '[({(<(())[]>[[{[]{<()<>>',
    '[(()[<>])]({[<{<<[]>>(',
    '{([(<{}[<>[]}>{[]{[(<()>',
    '(((({<>}<{<{<>}{[]{[]{}',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '{<[[]]>}<{[{[{[]{()[[[]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
    '<{([{{}}[<[[[<>{}]]]>[]]',
  ];

  test('getFirstIllegalCharacter', () => {
    expect(getFirstIllegalCharacter('{([(<{}[<>[]}>{[]{[(<()>')).toEqual('}');
    expect(getFirstIllegalCharacter('[({(<(())[]>[[{[]{<()<>>')).toBeNull();
  });

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(26397);
  });

  test('getMissingCharacters', () => {
    expect(getMissingCharacters('[({(<(())[]>[[{[]{<()<>>').join('')).toEqual(
      '}}]])})]'
    );
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(288957);
  });
});
