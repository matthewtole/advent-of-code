import {parseProgram, part1, part2} from './08';

describe('Day 8', () => {
  test('Part 1', () => {
    expect(
      part1(
        parseProgram(`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`)
      )
    ).toEqual(5);
  });

  test('Part 2', () => {
    expect(
      part2(
        parseProgram(`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`)
      )
    ).toEqual(8);
  });
});
