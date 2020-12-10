import {argv} from 'process';

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
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {part1, part2} = await import('./04');
    console.log(' - DAY 04 - ');
    console.log('Part 1:', part1('yzbqklnj'));
    console.log('Part 2:', part2('yzbqklnj'));
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
  async () => {},
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
  async () => {
    const {part1, part2} = await import('./10');
    console.log(' - DAY 10 - ');
    console.log('Part 1:', part1('1113122113'));
    console.log('Part 2:', part2('1113122113'));
  },
  async () => {
    const {part1, part2} = await import('./11');
    console.log(' - DAY 11 - ');
    console.log('Part 1:', part1('cqjxjnds'));
    console.log('Part 2:', part2('cqjxjnds'));
  },
  async () => {
    const {parse, part1, part2} = await import('./12');
    const data = await parse();
    console.log(' - DAY 12 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {},
  async () => {
    const {parse, part1, part2} = await import('./14');
    const data = await parse();
    console.log(' - DAY 14 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {parse, part1, part2} = await import('./15');
    const data = await parse();
    console.log(' - DAY 15 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
  async () => {
    const {parse, part1, part2} = await import('./16');
    const data = await parse();
    console.log(' - DAY 16 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
];

(async () => {
  const day = argv[2] ? parseInt(argv[2]) : 0;
  if (day > 0) {
    await days[day - 1]();
  } else {
    for (const day of days) {
      await day();
      console.log();
    }
  }
})().then();
