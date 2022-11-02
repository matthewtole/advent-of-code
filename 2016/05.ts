import SparkMD5 from 'spark-md5';

export type DataType = string;

export const part1 = (data: DataType): string => {
  let password = '';
  let index = 0;
  let hash = '';
  while (password.length < 8) {
    hash = SparkMD5.hash(`${data}${index}`);
    if (hash.startsWith('00000')) {
      password += hash.substring(5, 6);
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
    hash = SparkMD5.hash(`${data}${index}`);
    const position = Number(hash.substring(5, 6));
    if (hash.startsWith('00000') && position < 8 && password[position] === '') {
      password[position] = hash.substring(6, 7);
    }
    index += 1;
  }
  return password.join('');
};
