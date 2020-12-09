export const lookAndSay = (input: string): string => {
  let result = '';
  let currentDigit = '';
  let currentCount = 0;
  for (let digit of input.split('')) {
    if (digit !== currentDigit) {
      if (currentCount > 0) {
        result += `${currentCount}${currentDigit}`;
      }
      currentDigit = digit;
      currentCount = 0;
    }
    currentCount += 1;
  }
  result += `${currentCount}${currentDigit}`;
  return result;
};

export const runLookAndSaySequence = (input: string, times: number): string => {
  let result = input;
  for (let i = 0; i < times; i += 1) {
    result = lookAndSay(result);
  }
  return result;
};

export const part1 = (input: string): number =>
  runLookAndSaySequence(input, 40).length;

export const part2 = (input: string): number =>
  runLookAndSaySequence(input, 50).length;
