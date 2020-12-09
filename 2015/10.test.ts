import {lookAndSay, runLookAndSaySequence} from './10';

describe('Day 9', () => {
  test('lookAndSay', () => {
    expect(lookAndSay('1')).toEqual('11');
    expect(lookAndSay('11')).toEqual('21');
    expect(lookAndSay('21')).toEqual('1211');
  });

  test('runLookAndSaySequence', () => {
    expect(runLookAndSaySequence('1', 5)).toEqual('312211');
  });
});
