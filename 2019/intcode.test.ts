import {Intcode, parseInstruction} from './intcode';

describe('Intcode', () => {
  test('parseInstruction', () => {
    expect(parseInstruction(2)).toEqual([2, 0, 0, 0]);
    expect(parseInstruction(102)).toEqual([2, 1, 0, 0]);
    expect(parseInstruction(1002)).toEqual([2, 0, 1, 0]);
    expect(parseInstruction(10002)).toEqual([2, 0, 0, 1]);
  });

  test('EQUAL', () => {
    expect(Intcode([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], [8])).toEqual(1);
    expect(Intcode([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], [0])).toEqual(0);

    expect(Intcode([3, 3, 1108, -1, 8, 3, 4, 3, 99], [8])).toEqual(1);
    expect(Intcode([3, 3, 1108, -1, 8, 3, 4, 3, 99], [5])).toEqual(0);
  });

  test('LESS_THEN', () => {
    expect(Intcode([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], [8])).toEqual(0);
    expect(Intcode([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], [6])).toEqual(1);
    expect(Intcode([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], [10])).toEqual(0);

    expect(Intcode([3, 3, 1107, -1, 8, 3, 4, 3, 99], [8])).toEqual(0);
    expect(Intcode([3, 3, 1107, -1, 8, 3, 4, 3, 99], [6])).toEqual(1);
    expect(Intcode([3, 3, 1107, -1, 8, 3, 4, 3, 99], [10])).toEqual(0);
  });

  test('JUMP', () => {
    expect(
      Intcode([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], [0])
    ).toEqual(0);
    expect(
      Intcode([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], [1])
    ).toEqual(1);

    expect(
      Intcode([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], [7])
    ).toEqual(1);
    expect(
      Intcode([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], [0])
    ).toEqual(0);
  });

  test('complex', () => {
    expect(
      Intcode(
        [
          3,
          21,
          1008,
          21,
          8,
          20,
          1005,
          20,
          22,
          107,
          8,
          21,
          20,
          1006,
          20,
          31,
          1106,
          0,
          36,
          98,
          0,
          0,
          1002,
          21,
          125,
          20,
          4,
          20,
          1105,
          1,
          46,
          104,
          999,
          1105,
          1,
          46,
          1101,
          1000,
          1,
          20,
          4,
          20,
          1105,
          1,
          46,
          98,
          99,
        ],
        [5]
      )
    ).toEqual(999);
    expect(
      Intcode(
        [
          3,
          21,
          1008,
          21,
          8,
          20,
          1005,
          20,
          22,
          107,
          8,
          21,
          20,
          1006,
          20,
          31,
          1106,
          0,
          36,
          98,
          0,
          0,
          1002,
          21,
          125,
          20,
          4,
          20,
          1105,
          1,
          46,
          104,
          999,
          1105,
          1,
          46,
          1101,
          1000,
          1,
          20,
          4,
          20,
          1105,
          1,
          46,
          98,
          99,
        ],
        [8]
      )
    ).toEqual(1000);
    expect(
      Intcode(
        [
          3,
          21,
          1008,
          21,
          8,
          20,
          1005,
          20,
          22,
          107,
          8,
          21,
          20,
          1006,
          20,
          31,
          1106,
          0,
          36,
          98,
          0,
          0,
          1002,
          21,
          125,
          20,
          4,
          20,
          1105,
          1,
          46,
          104,
          999,
          1105,
          1,
          46,
          1101,
          1000,
          1,
          20,
          4,
          20,
          1105,
          1,
          46,
          98,
          99,
        ],
        [10]
      )
    ).toEqual(1001);
  });
});
