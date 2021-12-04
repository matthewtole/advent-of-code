import {createHash} from 'crypto';

export type DataType = string;

export const part1 = (data: DataType): string => {
  let password = '';
  let index = 0;
  let hash = '';
  while (password.length < 8) {
    hash = createHash('md5').update(`${data}${index}`).digest('hex');
    if (hash.startsWith('00000')) {
      password += hash.substr(5, 1);
    }
    index += 1;
  }
  return password;
};

export const part2 = (data: DataType): string => {
  const password = new Array(8).fill('');
  let index = 0;
  let hash = '';
  while (!password.every(p => p !== '')) {
    hash = createHash('md5').update(`${data}${index}`).digest('hex');
    const position = Number(hash.substr(5, 1));
    if (hash.startsWith('00000') && position < 8 && password[position] === '') {
      password[position] = hash.substr(6, 1);
    }
    index += 1;
  }
  return password.join('');
};
