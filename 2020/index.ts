import {argv} from 'process';

import * as day01 from './01';
import * as day02 from './02';
import * as day03 from './03';
import * as day04 from './04';
import * as day05 from './05';
import * as day06 from './06';

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
  () => {
    return day02.parse().then(data => {
      console.log();
      console.log(' - DAY 02 - ');
      console.log('Part 1:', day02.part1(data));
      console.log('Part 2:', day02.part2(data));
    });
  },
  () => {
    return day03.parse().then(data => {
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
    });
  },
  () => {
    return day04.parse().then(data => {
      console.log();
      console.log(' - DAY 04 - ');
      console.log('Part 1:', day04.part1(data));
      console.log('Part 2:', day04.part2(data));
    });
  },
  () => {
    return day05.parse().then(data => {
      console.log();
      console.log(' - DAY 05 - ');
      console.log('Part 1:', day05.part1(data));
      console.log('Part 2:', day05.part2(data));
    });
  },
  () => {
    return day06.parse().then(data => {
      console.log();
      console.log(' - DAY 06 - ');
      console.log('Part 1:', day06.part1(data));
      console.log('Part 2:', day06.part2(data));
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
