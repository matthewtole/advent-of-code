import {part1, part2} from './05';

describe('Day 5', () => {
  test('Part 1', () => {
    expect(part1(['ugknbfddgicrmopn'])).toEqual(1);
    expect(part1(['aaa'])).toEqual(1);
    expect(part1(['jchzalrnumimnmhp'])).toEqual(0);
    expect(part1(['haegwjzuvuyypxyu'])).toEqual(0);
    expect(part1(['dvszwmarrgswjxmb'])).toEqual(0);
  });

  test('Part 2', () => {
    expect(part2(['qjhvhtzxzqqjkmpb'])).toEqual(1);
    expect(part2(['xxyxx'])).toEqual(1);
    expect(part2(['uurcxstgmygtbstg'])).toEqual(0);
    expect(part2(['ieodomkazucvgmuy'])).toEqual(0);
  });
});
