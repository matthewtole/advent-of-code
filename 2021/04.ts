import {loadData} from '../shared/utils';
import {sum} from './utils';

type Numbers = Array<number>;
type Board = Array<Array<number>>;
type Data = [Numbers, Array<Board>];

export const parseData = (data: Array<string>): Data => [
  data.shift()?.split(',').map(Number) ?? [],
  data.map(board =>
    board.split('\n').map(row =>
      row
        .split(/\ +/)
        .filter(v => v.trim() !== '')
        .map(Number)
    )
  ),
];

/* istanbul ignore next */
export const parse = async (): Promise<Data> =>
  parseData((await loadData(2021, 4)).split('\n\n'));

function hasBoardWon(board: Board, numbers: Numbers): boolean {
  for (let row of board) {
    if (row.every(n => numbers.includes(n))) {
      return true;
    }
  }
  for (let col = 0; col < board[0].length; col += 1) {
    if (board.map(row => row[col]).every(n => numbers.includes(n))) {
      return true;
    }
  }
  return false;
}

function unmarkedNumbers(board: Board, numbers: Numbers): Numbers {
  return board
    .reduce((nums, row) => nums.concat(...row), [])
    .filter(n => !numbers.includes(n));
}

function getWinningNumbersForBoard(board: Board, numbers: Numbers): Numbers {
  for (let i = 0; i < numbers.length; i += 1) {
    if (hasBoardWon(board, numbers.slice(0, i))) {
      return numbers.slice(0, i);
    }
  }
  /* istanbul ignore next */
  return numbers;
}

function getBestBoard(
  boards: Array<Board>,
  numbers: Numbers,
  comparison: (n1: Numbers, n2: Numbers) => boolean
): [Board | null, Numbers] {
  let winningNumbers: Numbers = [];
  let winningBoard: Board | null = null;

  for (let board of boards) {
    const boardNumbers = getWinningNumbersForBoard(board, numbers);
    if (winningBoard == null || comparison(boardNumbers, winningNumbers)) {
      winningBoard = board;
      winningNumbers = boardNumbers;
    }
  }
  return [winningBoard, winningNumbers];
}

function getBoardValue(board: Board, numbers: Numbers): number {
  return sum(unmarkedNumbers(board, numbers)) * numbers[numbers.length - 1];
}

export const part1 = ([numbers, boards]: Data): number => {
  const [bestBoard, bestNumbers] = getBestBoard(
    boards,
    numbers,
    (n1, n2) => n1.length < n2.length
  );
  /* istanbul ignore next */
  return bestBoard == null ? NaN : getBoardValue(bestBoard, bestNumbers);
};

export const part2 = ([numbers, boards]: Data): number => {
  const [bestBoard, bestNumbers] = getBestBoard(
    boards,
    numbers,
    (n1, n2) => n1.length > n2.length
  );
  /* istanbul ignore next */
  return bestBoard == null ? NaN : getBoardValue(bestBoard, bestNumbers);
};
