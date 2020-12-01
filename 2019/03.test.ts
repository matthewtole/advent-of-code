import {part1, part2} from './03';

describe('Day 03', () => {
  const testData = [
    [
      ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
      ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
    ],
    [
      [
        'R98',
        'U47',
        'R26',
        'D63',
        'R33',
        'U87',
        'L62',
        'D20',
        'R33',
        'U53',
        'R51',
      ],
      ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'],
    ],
  ];

  test('Part 1', () => {
    expect(part1(testData[0][0], testData[0][1])).toEqual(159);
    expect(part1(testData[1][0], testData[1][1])).toEqual(135);
  });

  test('Part 2', () => {
    expect(part2(testData[0][0], testData[0][1])).toEqual(610);
    expect(part2(testData[1][0], testData[1][1])).toEqual(410);
  });
});
