const ADD = 1;
const MULIPLY = 2;
const INPUT = 3;
const OUTPUT = 4;
const JUMP_TRUE = 5;
const JUMP_FALSE = 6;
const LESS_THAN = 7;
const EQUALS = 8;
const RELATIVE_BASE = 9;
const HALT = 99;

export class IntcodeComputer {
  private program: Array<number>;
  private inputs: Array<number>;
  private output: number = 0;
  private halted: boolean = false;
  private position = 0;
  private relativeBase = 0;

  constructor(program: Array<number>) {
    this.program = program;
    this.inputs = [];
  }

  private getParam = (mode: number): number => {
    switch (mode) {
      case 0:
      default:
        return this.program[this.program[this.position++]];
      case 1:
        return this.program[this.position++];
      case 2:
        return this.program[this.relativeBase + this.program[this.position++]];
    }
  };

  private setParam = (mode: number, value: number) => {
    switch (mode) {
      case 2:
        this.program[this.relativeBase + this.program[this.position++]] = value;
        break;
      default:
        this.program[this.program[this.position++]] = value;
        break;
    }
  };

  private parseInstruction = (
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

  private execute() {
    while (this.program[this.position] !== HALT) {
      const [operation, mode1, mode2, mode3] = this.parseInstruction(
        this.program[this.position++]
      );
      switch (operation) {
        case ADD:
          {
            const result = this.getParam(mode1) + this.getParam(mode2);
            this.setParam(mode3, result);
          }
          break;
        case MULIPLY:
          {
            const result = this.getParam(mode1) * this.getParam(mode2);
            this.setParam(mode3, result);
          }
          break;
        case OUTPUT:
          {
            this.output = this.getParam(mode1);
            return this.output;
          }
          break;
        case INPUT:
          {
            this.setParam(mode1, this.inputs.shift()!);
          }
          break;
        case JUMP_TRUE:
          {
            if (this.getParam(mode1) !== 0) {
              this.position = this.getParam(mode2);
            } else {
              this.getParam(mode2);
            }
          }
          break;
        case JUMP_FALSE:
          {
            if (this.getParam(mode1) === 0) {
              this.position = this.getParam(mode2);
            } else {
              this.getParam(mode2);
            }
          }
          break;
        case LESS_THAN:
          {
            const result = this.getParam(mode1) < this.getParam(mode2) ? 1 : 0;
            this.setParam(mode3, result);
          }
          break;
        case EQUALS:
          {
            const result =
              this.getParam(mode1) === this.getParam(mode2) ? 1 : 0;
            this.setParam(mode3, result);
          }
          break;
        case RELATIVE_BASE:
          this.relativeBase += this.getParam(mode1);
          break;
        case HALT:
          this.halted = true;
          break;
        default:
          throw new Error(`Unexpected operation "${operation}"`);
      }
    }
    this.halted = true;
    return this.output;
  }

  run(): number {
    return this.execute();
  }

  isHalted() {
    return this.halted;
  }

  addInput(input: number) {
    this.inputs.push(input);
    return this;
  }
}

/**
 * Basic intcode computer that takes an input of numbers and returns the final state of the program.
 */
export const Intcode = (program: Array<number>, inputs: Array<number> = []) => {
  const intcode = new IntcodeComputer(program);
  inputs.forEach(input => intcode.addInput(input));
  return intcode.run();
};

export const getAllOutputs = (
  program: Array<number>,
  inputs: Array<number> = []
) => {
  const computer = new IntcodeComputer([...program]);
  inputs.forEach(input => computer.addInput(input));
  const outputs = [];
  while (!computer.isHalted()) {
    const output = computer.run();
    outputs.push(output);
    if (output === 99) {
      break;
    }
  }
  return outputs;
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
