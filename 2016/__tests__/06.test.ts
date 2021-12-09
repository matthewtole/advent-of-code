import {part1, part2} from '../06';

describe('Day 06', () => {
  const testData = [
    'eedadn',
    'drvtee',
    'eandsr',
    'raavrd',
    'atevrs',
    'tsrnev',
    'sdttsa',
    'rasrtv',
    'nssdts',
    'ntnada',
    'svetve',
    'tesnvt',
    'vntsnd',
    'vrdear',
    'dvrsen',
    'enarar',
  ];
  test('Part 1', () => {
    expect(part1(testData)).toEqual('easter');
  });

  test('Part 2', () => {
    expect(part2(testData)).toEqual('advent');
  });
});
