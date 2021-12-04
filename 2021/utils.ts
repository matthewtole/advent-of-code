export const sum = (nums: Array<number>) =>
  nums.reduce((total, num) => total + num, 0);

export const product = (nums: Array<number>) =>
  nums.reduce((total, num) => total * num, 1);
