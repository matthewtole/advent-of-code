import {
  findValidMapping,
  getOutputValue,
  isValidMapping,
  mapPattern,
  parseData,
  part1,
  part2,
  sortPattern,
} from '../08';

describe('Day 7', () => {
  const testData =
    parseData(`be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`);

  test('Part 1', () => {
    const result = part1(testData);
    expect(result).toEqual(26);
  });

  test('sortPattern', () => {
    expect(sortPattern('bedcfga')).toEqual('abcdefg');
  });

  test('mapPattern', () => {
    expect(mapPattern('acedgfb', 'deafgbc')).toEqual('abcdefg');
  });

  test('isValidMapping', () => {
    expect(
      isValidMapping('deafgbc', [
        'acedgfb',
        'cdfbe',
        'gcdfa',
        'fbcad',
        'dab',
        'cefabd',
        'cdfgeb',
        'eafb',
        'cagedb',
        'ab',
      ])
    ).toBeTruthy();
  });

  test('findValidMapping', () => {
    expect(
      findValidMapping([
        'acedgfb',
        'cdfbe',
        'gcdfa',
        'fbcad',
        'dab',
        'cefabd',
        'cdfgeb',
        'eafb',
        'cagedb',
        'ab',
      ])
    ).toEqual('deafgbc');
  });

  test('getOutputValue', () => {
    expect(
      getOutputValue(['cdfeb', 'fcadb', 'cdfeb', 'fcadb'], 'deafgbc')
    ).toEqual(5353);
  });

  test('Part 2', () => {
    const result = part2(testData);
    expect(result).toEqual(61229);
  });
});
