const hasSequence = (letters: Array<string>): boolean => {
  for (let index = 2; index < letters.length; index += 1) {
    if (
      String.fromCharCode(letters[index].charCodeAt(0) - 1) ===
        letters[index - 1] &&
      String.fromCharCode(letters[index].charCodeAt(0) - 2) ===
        letters[index - 2]
    ) {
      return true;
    }
  }
  return false;
};

const nextPassword = (password: string): string => {
  const letters = password.split('');

  for (let index = letters.length - 1; index >= 0; index -= 1) {
    const newChar = String.fromCharCode(letters[index].charCodeAt(0) + 1);
    if (newChar === '{') {
      letters[index] = 'a';
    } else {
      letters[index] = newChar;
      break;
    }
  }

  return letters.join('');
};

export const isValidPassword = (password: string): boolean => {
  const letters = password.split('');
  return (
    hasSequence(letters) &&
    /([a-z])\1.*([a-z])\2/.test(password) &&
    !/[iol]/.test(password)
  );
};

export const part1 = (input: string): string => {
  let password = nextPassword(input);
  while (true) {
    if (isValidPassword(password)) {
      return password;
    }
    password = nextPassword(password);
  }
};

export const part2 = (input: string): string => part1(part1(input));
