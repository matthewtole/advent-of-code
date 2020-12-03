import {argv} from 'process';

import * as day01 from './01';
import * as day02 from './02';
import * as day03 from './03';
import * as day04 from './04';
import * as day05 from './05';
import * as day06 from './06';
import * as day07 from './07';
import * as day08 from './08';
import * as day09 from './09';
import * as day10 from './10';
import * as day11 from './11';

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

      console.log('Part 1:', day02.part1(data, 12, 2));
      console.log('Part 2:', day02.part2(data, 19690720));
    });
  },
  () => {
    return day03.parse().then(data => {
      console.log();
      console.log(' - DAY 03 - ');

      console.log('Part 1:', day03.part1(data[0], data[1]));
      console.log('Part 2:', day03.part2(data[0], data[1]));
    });
  },
  () => {
    console.log();
    console.log(' - DAY 04 - ');

    console.log(
      'Part 1:',
      day04.countValidPassswords(265275, 781584, day04.isValidPasswordPart1)
    );
    console.log(
      'Part 2:',
      day04.countValidPassswords(265275, 781584, day04.isValidPasswordPart2)
    );
  },
  () => {
    return day05.parse().then(data => {
      console.log();
      console.log(' - DAY 05 - ');

      console.log('Part 1:', day05.part1([...data], 1));
      console.log('Part 2:', day05.part1([...data], 5));
    });
  },
  () => {
    return day06.parse().then(data => {
      console.log();
      console.log(' - DAY 06 - ');

      console.log('Part 1:', day06.part1(data));
      console.log('Part 2:', day06.part2(data, 'YOU', 'SAN'));
    });
  },
  () => {
    return day07.parse().then(data => {
      console.log();
      console.log(' - DAY 07 - ');

      console.log('Part 1:', day07.solve(data, [0, 1, 2, 3, 4]));
      console.log('Part 2:', day07.solve(data, [5, 6, 7, 8, 9]));
    });
  },
  () => {
    return day08.parse(25, 6).then(data => {
      console.log();
      console.log(' - DAY 08 - ');

      console.log('Part 1:', day08.part1(data));
      console.log('Part 2:\n', day08.part2(data));
    });
  },
  () => {
    return day09.parse().then(data => {
      console.log();
      console.log(' - DAY 09 - ');

      console.log('Part 1:', day09.part1(data));
      console.log('Part 2:', day09.part2(data));
    });
  },
  () => {
    return day10.parse().then(data => {
      console.log();
      console.log(' - DAY 10 - ');

      console.log('Part 1:', day10.part1(data));
      console.log('Part 2:', day10.part2(data, day10.part1(data)[0])[199]);
    });
  },
  () => {
    return day11.parse().then(data => {
      console.log();
      console.log(' - DAY 10 - ');

      console.log('Part 1:', day11.part1(data));
      console.log('Part 2:');
      console.log(day11.part2(data));
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
