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
    const {parse, part1, part2} = await import('./04');
    const data = await parse();
    console.log(' - DAY 04 - ');
    console.log('Part 1:', part1(data));
    console.log('Part 2:', part2(data));
  },
];

(async () => {
  const day = argv[2] ? parseInt(argv[2]) : 0;
  if (day > 0) {
    await days[day - 1]?.();
  } else {
    for (const day of days) {
      await day();
      console.log();
    }
  }
})().then();
