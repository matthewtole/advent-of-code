import {execute, runWithPerf} from '../shared/utils';

const days: Array<() => Promise<void>> = [
  async () => {
    const {parse, part1, part2} = await import('./01');
    const data = await parse();
    console.log(' - DAY 01 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
];

execute(days).then();
