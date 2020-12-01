import {isValidPasswordPart1, isValidPasswordPart2} from './04';

describe('Day 04', () => {
  test('isValidPassword1', () => {
    expect(isValidPasswordPart1(111111)).toBe(true);
    expect(isValidPasswordPart1(223450)).toBe(false);
    expect(isValidPasswordPart1(123789)).toBe(false);
  });

  test('isValidPassword2', () => {
    expect(isValidPasswordPart2(112233)).toBe(true);
    expect(isValidPasswordPart2(123444)).toBe(false);
    expect(isValidPasswordPart2(111122)).toBe(true);
  });
});
