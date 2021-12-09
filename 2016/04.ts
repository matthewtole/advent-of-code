import {loadData, sum} from '../shared/utils';

export type DataType = string;
export type Room = [string, number, string];

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2016, 4)).split('\n');

const countCharacters = (str: string): Record<string, number> => {
  return str
    .split('')
    .reduce(
      (count, char) => ({...count, [char]: (count[char] ?? 0) + 1}),
      {} as Record<string, number>
    );
};

const extractRoomData = (data: DataType): Room | null => {
  const room = /^([a-z\-]*)([0-9]*)\[([a-z]{5})\]$/.exec(data);
  if (room == null) {
    return null;
  }
  const [_, chars, id, checksum] = room;
  return [chars, Number(id), checksum];
};

export const isRealRoom = (data: DataType): boolean => {
  const room = extractRoomData(data);
  if (room == null) {
    return false;
  }
  const charCounts = countCharacters(room[0].replace(/\-/g, ''));
  const sortedChars = Object.keys(charCounts).sort((c1, c2) => {
    if (charCounts[c1] > charCounts[c2]) {
      return -1;
    }
    if (charCounts[c1] < charCounts[c2]) {
      return 1;
    }
    return c1 < c2 ? -1 : 1;
  });
  return sortedChars.slice(0, 5).join('') === room[2];
};

export const part1 = (data: Array<DataType>): number =>
  sum(data.filter(isRealRoom).map(data => extractRoomData(data)?.[1] ?? 0));

const rotateChar = (char: string, amt: number): string =>
  String.fromCharCode(((char.charCodeAt(0) - 97 + amt) % 26) + 97);

export const decryptRoom = (data: DataType): string => {
  const room = extractRoomData(data);
  if (room == null) {
    return '';
  }
  return room[0]
    .split('')
    .map(char => (char === '-' ? ' ' : rotateChar(char, room[1])))
    .join('')
    .trim();
};

export const part2 = (data: Array<DataType>): number =>
  extractRoomData(
    data
      .filter(isRealRoom)
      .find(room => decryptRoom(room) === 'northpole object storage')!
  )?.[1] ?? 0;
