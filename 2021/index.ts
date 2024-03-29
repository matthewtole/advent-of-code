import {execute, runWithPerf} from '../shared/utils';

const days = [
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
  async () => {
    const {parse, part1, part2} = await import('./05');
    const data = await parse();
    console.log(' - DAY 05 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./06');
    const data = await parse();
    console.log(' - DAY 06 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./07');
    const data = await parse();
    console.log(' - DAY 07 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./08');
    const data = await parse();
    console.log(' - DAY 08 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./09');
    const data = await parse();
    console.log(' - DAY 09 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./10');
    const data = await parse();
    console.log(' - DAY 10 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./11');
    const data = await parse();
    console.log(' - DAY 11 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./12');
    const data = await parse();
    console.log(' - DAY 12 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    // const {parse, part1, part2} = await import('./11');
    // const data = await parse();
    console.log(' - DAY 13 - ');
    // console.log('Part 1:', runWithPerf(part1, data));
    // console.log('Part 2:', runWithPerf(part2, data));
  },
  async () => {
    const {parse, part1, part2} = await import('./14');
    const data = await parse();
    console.log(' - DAY 14 - ');
    console.log('Part 1:', runWithPerf(part1, data));
    console.log('Part 2:', runWithPerf(part2, data));
  },
];

execute(days).then();
