const ADD = 1;
const MULIPLY = 2;
const INPUT = 3;
const OUTPUT = 4;
const JUMP_TRUE = 5;
const JUMP_FALSE = 6;
const LESS_THAN = 7;
const EQUALS = 8;
const HALT = 99;

/**
 * Basic intcode computer that takes an input of numbers and returns the final state of the program.
 */
export const Intcode = (program: Array<number>, input?: number) => {
  let position = 0;
  let output = -1;

  const param = (mode: number): number => {
    return mode === 0 ? program[program[position++]] : program[position++];
  };

  while (program[position] !== HALT) {
    const [operation, mode1, mode2] = parseInstruction(program[position++]);
    switch (operation) {
      case ADD:
        {
          const result = param(mode1) + param(mode2);
          program[program[position++]] = result;
        }
        break;
      case MULIPLY:
        {
          const result = param(mode1) * param(mode2);
          program[program[position++]] = result;
        }
        break;
      case OUTPUT:
        {
          output = param(mode1);
        }
        break;
      case INPUT:
        {
          program[program[position++]] = input!;
        }
        break;
      case JUMP_TRUE:
        {
          if (param(mode1) !== 0) {
            position = param(mode2);
          } else {
            param(mode2);
          }
        }
        break;
      case JUMP_FALSE:
        {
          if (param(mode1) === 0) {
            position = param(mode2);
          } else {
            param(mode2);
          }
        }
        break;
      case LESS_THAN:
        {
          const result = param(mode1) < param(mode2) ? 1 : 0;
          program[program[position++]] = result;
        }
        break;
      case EQUALS:
        {
          const result = param(mode1) === param(mode2) ? 1 : 0;
          program[program[position++]] = result;
        }
        break;
      default:
        throw new Error(`Unexpected operation "${operation}"`);
    }
  }

  return output;
};

export const parseInstruction = (
  instruction: number
): [number, number, number, number] => {
  const bits = instruction.toString().padStart(5, '0').split('');
  return [
    parseInt([bits[3], bits[4]].join(''), 10),
    parseInt(bits[2]),
    parseInt(bits[1]),
    parseInt(bits[0]),
  ];
};
