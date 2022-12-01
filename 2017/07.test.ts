import {parseData, part1, part2} from './07';

describe('Day 07', () => {
  const data = `pbga (66)
  xhth (57)
  ebii (61)
  havc (66)
  ktlj (57)
  fwft (72) -> ktlj, cntj, xhth
  qoyq (66)
  padx (45) -> pbga, havc, qoyq
  tknk (41) -> ugml, padx, fwft
  jptl (61)
  ugml (68) -> gyxo, ebii, jptl
  gyxo (61)
  cntj (57)`
    .split('\n')
    .map(s => parseData(s.trim()));

  test('parseData', () => {
    expect(data[0]).toEqual(['pbga', 66, []]);
    expect(data[5]).toEqual(['fwft', 72, ['ktlj', 'cntj', 'xhth']]);
  });

  test('Part 1', () => {
    const result = part1(data);
    expect(result).toEqual('tknk');
  });

  test.skip.failing('Part 2', () => {
    const result = part2(data);
    expect(result).toEqual(8);
  });
});
