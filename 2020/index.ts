import {argv} from 'process';

import * as day01 from './01';
import * as day02 from './02';
import * as day03 from './03';
import * as day04 from './04';
import * as day05 from './05';
import * as day06 from './06';
import * as day07 from './07';

let day = argv[2] ? parseInt(argv[2]) : 0;

const days = [
  async () => {
    const data = await day01.parse();
    console.log();
    console.log(' - DAY 01 - ');
    console.log('Part 1:', day01.part1(data));
    console.log('Part 2:', day01.part2(data));
  },
  async () => {
    const data = await day02.parse();
    console.log();
    console.log(' - DAY 02 - ');
    console.log('Part 1:', day02.part1(data));
    console.log('Part 2:', day02.part2(data));
  },
  async () => {
    const data = await day03.parse();
    console.log();
    console.log(' - DAY 03 - ');
    console.log('Part 1:', day03.part1(data, [3, 1]));
    console.log(
      'Part 2:',
      day03.part2(data, [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
      ])
    );
  },
  async () => {
    const data = await day04.parse();
    console.log();
    console.log(' - DAY 04 - ');
    console.log('Part 1:', day04.part1(data));
    console.log('Part 2:', day04.part2(data));
  },
  async () => {
    const data = await day05.parse();
    console.log();
    console.log(' - DAY 05 - ');
    console.log('Part 1:', day05.part1(data));
    console.log('Part 2:', day05.part2(data));
  },
  async () => {
    const data = await day06.parse();
    console.log();
    console.log(' - DAY 06 - ');
    console.log('Part 1:', day06.part1(data));
    console.log('Part 2:', day06.part2(data));
  },
  async () => {
    const data = await day07.parse();
    console.log();
    console.log(' - DAY 07 - ');
    console.log('Part 1:', day07.part1(data));
    console.log('Part 2:', day07.part2(data));
  },
];

(async () => {
  if (day > 0) {
    await days[day - 1]();
  } else {
    for (const day of days) {
      await day();
    }
  }
})().then();
