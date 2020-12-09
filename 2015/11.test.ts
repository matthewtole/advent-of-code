import {isValidPassword, part1, part2} from './11';

describe('Day 11', () => {
  test('isValidPassword', () => {
    expect(isValidPassword('hijklmmn')).toBeFalsy();
    expect(isValidPassword('abbceffg')).toBeFalsy();
    expect(isValidPassword('abbcegjk')).toBeFalsy();
    expect(isValidPassword('abcdffaa')).toBeTruthy();
  });

  test('Part 1', () => {
    expect(part1('abcdefgh')).toEqual('abcdffaa');
    expect(part1('ghijklmn')).toEqual('ghjaabcc');
  });

  test('Part 2', () => {
    expect(part2('abcdefgh')).toEqual('abcdffbb');
    expect(part2('ghijklmn')).toEqual('ghjbbcdd');
  });
});
