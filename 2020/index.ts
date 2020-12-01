import {argv} from 'process';

import * as day01 from './01';

let day = argv[2] ? parseInt(argv[2]) : 0;

const days = [
  () => {
    return day01.parse().then(data => {
      console.log();
      console.log(' - DAY 01 - ');
      console.log('Part 1:', day01.part1(data));
      console.log('Part 2:', day01.part2(data));
    });
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
