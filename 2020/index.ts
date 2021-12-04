import {execute} from '../shared/utils';

const days = [
  async () => {
    const {parse, part1, part2} = await import('./01');
    const data = await parse();
    console.log(' - DAY 01 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {parse, part1, part2} = await import('./02');
    const data = await parse();
    console.log(' - DAY 02 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {parse, part1, part2} = await import('./03');
    const data = await parse();
    console.log(' - DAY 03 - ');
    console.log('Part 1:', part1(data, [3, 1]));
    console.log(
      'Part 2:',
      part2(data, [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
      ])
    );
  },
  async () => {
    const {parse, part1, part2} = await import('./04');
    const data = await parse();
    console.log(' - DAY 04 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {parse, part1, part2} = await import('./05');
    const data = await parse();
    console.log(' - DAY 05 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {parse, part1, part2} = await import('./06');
    const data = await parse();
    console.log(' - DAY 06 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {parse, part1, part2} = await import('./07');
    const data = await parse();
    console.log(' - DAY 07 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {parse, part1, part2} = await import('./08');
    const data = await parse();
    console.log(' - DAY 08 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {parse, part1, part2} = await import('./09');
    const data = await parse();
    console.log(' - DAY 09 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
];

execute(days).then();
