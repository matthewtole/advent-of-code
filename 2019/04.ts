/**
 * https://adventofcode.com/2019/day/4
 */

type DigitCount = {[digit: number]: number};

/**
 * Given a range of numbers, return the total number of possible passwords given the rules.
 */
export const countValidPassswords = (
  min: number,
  max: number,
  isValidPassword: (number: number) => boolean
): number => {
  let numPasswords = 0;
  for (let password = min; password <= max; password += 1) {
    numPasswords += isValidPassword(password) ? 1 : 0;
  }
  return numPasswords;
};

/**
 * Split a password into an array of digits
 */
const digitize = (password: number): Array<number> =>
  password
    .toString()
    .split('')
    .map(d => parseInt(d, 10));

/**
 * Returns true if each digit in the array is equal to or greater than the previous digit.
 */
const neverDecreases = (digits: Array<number>): boolean => {
  return digits.every((d: number, index: number) => {
    return index <= 0 || d >= digits[index - 1];
  });
};

/**
 * Count the number of occurences of each digit in the password
 */
const countDigits = (digits: Array<number>): DigitCount => {
  return digits.reduce((counts, digit) => {
    return {
      ...counts,
      [digit]: (counts[digit] || 0) + 1,
    };
  }, {} as DigitCount);
};

/**
 * Returns true if there is at least one digit that occurs multiple times
 */
const hasSomeMatchingDigits = (counts: DigitCount): boolean => {
  return Object.values(counts).some(d => d >= 2);
};

/**
 * Returns true if there is at least one digit that occurs exactly twice
 */
const hasSomeDigitPairts = (counts: DigitCount): boolean => {
  return Object.values(counts).some(d => d === 2);
};

/**
 * Determine if the given password is valid for the rules of part 1
 */
export const isValidPasswordPart1 = (password: number) => {
  const digits = digitize(password);
  return (
    digits.length === 6 &&
    neverDecreases(digits) &&
    hasSomeMatchingDigits(countDigits(digits))
  );
};

/**
 * Determine if the given password is valid for the rules of part 2
 */
export const isValidPasswordPart2 = (password: number) => {
  const digits = digitize(password);
  return (
    digits.length === 6 &&
    neverDecreases(digits) &&
    hasSomeDigitPairts(countDigits(digits))
  );
};
