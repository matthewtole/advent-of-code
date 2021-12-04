import {part1, isRealRoom, decryptRoom} from '../04';

describe('Day 04', () => {
  test('isRealRoom', () => {
    expect(isRealRoom('aaaaa-bbb-z-y-x-123[abxyz]')).toBeTruthy();
    expect(isRealRoom('a-b-c-d-e-f-g-h-987[abcde]')).toBeTruthy();
    expect(isRealRoom('not-a-real-room-404[oarel]')).toBeTruthy();
    expect(isRealRoom('totally-real-room-200[decoy]')).toBeFalsy();
  });

  test('Part 1', () => {
    expect(
      part1([
        'aaaaa-bbb-z-y-x-123[abxyz]',
        'a-b-c-d-e-f-g-h-987[abcde]',
        'not-a-real-room-404[oarel]',
        'totally-real-room-200[decoy]',
      ])
    ).toEqual(1514);
  });

  test('decryptRoom', () => {
    expect(decryptRoom('qzmt-zixmtkozy-ivhz-343[aaaaa]')).toEqual(
      'very encrypted name'
    );
  });
});
