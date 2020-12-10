import {loadData} from '../shared/utils';

const countLightsOn = (input: Array<Array<boolean>>): number => {
  return input.reduce(
    (count, row) =>
      count + row.reduce((count, cell) => count + Number(cell), 0),
    0
  );
};

export const countLitNeighbors = (
  grid: Array<Array<boolean>>,
  x: number,
  y: number
): number => {
  let count = 0;
  for (let row = y - 1; row <= y + 1; row += 1) {
    for (let col = x - 1; col <= x + 1; col += 1) {
      if (row === y && x === col) {
        continue;
      }
      if (grid[row] && grid[row][col]) {
        count += 1;
      }
    }
  }
  return count;
};

const makeGrid = (width: number, height: number): Array<Array<boolean>> => {
  return new Array(height).fill(null).map(() => new Array(width).fill(false));
};

export const part1 = (input: Array<Array<boolean>>, steps = 100): number => {
  let grid = input;
  for (let s = 0; s < steps; s += 1) {
    let newGrid = makeGrid(grid[0].length, grid.length);
    for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[0].length; col += 1) {
        const litNeighbors = countLitNeighbors(grid, col, row);
        if (grid[row][col]) {
          newGrid[row][col] = [2, 3].includes(litNeighbors);
        } else {
          newGrid[row][col] = litNeighbors === 3;
        }
      }
    }
    grid = newGrid;
  }
  return countLightsOn(grid);
};

export const part2 = (input: Array<Array<boolean>>, steps = 100): number => {
  let grid = input;
  grid[0][0] = true;
  grid[0][grid[0].length - 1] = true;
  grid[grid.length - 1][grid[0].length - 1] = true;
  grid[grid.length - 1][0] = true;

  for (let s = 0; s < steps; s += 1) {
    let newGrid = makeGrid(grid[0].length, grid.length);
    for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[0].length; col += 1) {
        const litNeighbors = countLitNeighbors(grid, col, row);
        if (grid[row][col]) {
          newGrid[row][col] = [2, 3].includes(litNeighbors);
        } else {
          newGrid[row][col] = litNeighbors === 3;
        }
      }
    }
    newGrid[0][0] = true;
    newGrid[0][grid[0].length - 1] = true;
    newGrid[grid.length - 1][grid[0].length - 1] = true;
    newGrid[grid.length - 1][0] = true;
    grid = newGrid;
  }
  return countLightsOn(grid);
};

export const parseGrid = (input: string): Array<Array<boolean>> => {
  return input.split('\n').map(row => row.split('').map(cell => cell === '#'));
};

export const parse = async () => parseGrid(await loadData(2015, 18));

// const renderGrid = (input: Array<Array<boolean>>) => {
//   console.log(
//     input.map(row => row.map(cell => (cell ? '#' : '.')).join('')).join('\n')
//   );
// };
