import {execute, runWithPerf} from '../shared/utils';

const days = [
  async () => {
    const {parse, part1, part2} = await import('./01');
    console.log(' - DAY 01 - ');
    console.log('Part 1:', runWithPerf(part1, await parse()));
    console.log('Part 2:', runWithPerf(part2, await parse()));
  },
  async () => {
    const {parse, part1, part2} = await import('./02');
    console.log(' - DAY 02 - ');
    console.log('Part 1:', runWithPerf(part1, await parse()));
    console.log('Part 2:', runWithPerf(part2, await parse()));
  },
  async () => {},
  async () => {
    const {parse, part1, part2} = await import('./04');
    console.log(' - DAY 04 - ');
    console.log('Part 1:', runWithPerf(part1, await parse()));
    console.log('Part 2:', runWithPerf(part2, await parse()));
  },
  async () => {
    const {parse, part1, part2} = await import('./05');
    console.log(' - DAY 05 - ');
    console.log('Part 1:', runWithPerf(part1, await parse()));
    console.log('Part 2:', runWithPerf(part2, await parse()));
  },
  async () => {
    const {parse, part1, part2} = await import('./06');
    console.log(' - DAY 6 - ');
    console.log('Part 1:', runWithPerf(part1, await parse()));
    console.log('Part 2:', runWithPerf(part2, await parse()));
  },
  async () => {
    const {parse, part1, part2} = await import('./07');
    console.log(' - DAY 7 - ');
    console.log('Part 1:', runWithPerf(part1, await parse()));
    console.log('Part 2:', runWithPerf(part2, await parse()));
  },
  async () => {
    const {parse, part1, part2} = await import('./08');
    console.log(' - DAY 8 - ');
    console.log('Part 1:', runWithPerf(part1, await parse()));
    console.log('Part 2:', runWithPerf(part2, await parse()));
  },
];

execute(days).then();
