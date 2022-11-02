#!/bin/bash

mkdir -p $1/data

day=$(printf %02d $2)

cat <<EOF >$1/$day.ts
import {loadData} from '../shared/utils';

export type DataType = any;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData($1, $2)).split('\n');

export const part1 = (data: Array<DataType>): number => data.length;

export const part2 = (data: Array<DataType>): number => data.length;
EOF

cat <<EOF >$1/$day.test.ts
import {part1, part2} from './$day';

describe('Day $day', () => {
  test('Part 1', () => {
    const result = part1([]);
    expect(result).toEqual(0);
  });

  test('Part 2', () => {
    const result = part2([]);
    expect(result).toEqual(0);
  });
});
EOF

touch $1/data/$day.txt

npm run test:$1 -t "Day $day"
