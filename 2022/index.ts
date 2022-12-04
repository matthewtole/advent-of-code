import {execute, runWithPerf} from '../shared/utils';

const days: Array<() => Promise<void>> = [
  async () => {
    const {parse, part1, part2} = await import('./01');
    const data = await parse();
    console.log(' - DAY 01 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./02');
    const data = await parse();
    console.log(' - DAY 02 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./03');
    const data = await parse();
    console.log(' - DAY 03 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./04');
    const data = await parse();
    console.log(' - DAY 04 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
];

execute(days).then();
