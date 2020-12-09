import {part1, part2} from './09';

describe('Day 8', () => {
  test('Part 1', () => {
    expect(
      part1([
        ['London', 'Dublin', 464],
        ['London', 'Belfast', 518],
        ['Dublin', 'Belfast', 141],
      ])
    ).toEqual(605);
  });

  test('Part 2', () => {
    expect(
      part2([
        ['London', 'Dublin', 464],
        ['London', 'Belfast', 518],
        ['Dublin', 'Belfast', 141],
      ])
    ).toEqual(982);
  });
});
