import {loadData} from '../shared/utils';

type Reindeer = [
  name: string,
  speed: number,
  flyTime: number,
  restTime: number
];

export const calculateDistance = (
  [_, speed, flyTime, restTime]: Reindeer,
  seconds: number
): number => {
  let isResting = false;
  let time = 0;
  let distance = 0;
  while (time < seconds) {
    distance += isResting ? 0 : speed * Math.min(seconds - time, flyTime);
    time += isResting ? restTime : flyTime;
    isResting = !isResting;
  }
  return distance;
};

export const part1 = (input: Array<Reindeer>, seconds = 2503): number => {
  return input.reduce(
    (max, reindeer) => Math.max(max, calculateDistance(reindeer, seconds)),
    0
  );
};

export const part2 = (input: Array<Reindeer>, seconds = 2503): number => {
  const points: {[name: string]: number} = {};

  for (let s = 1; s <= seconds; s += 1) {
    const results = input.map(
      reindeer =>
        [reindeer[0], calculateDistance(reindeer, s)] as [string, number]
    );
    const max = results.reduce((max, r) => Math.max(max, r[1]), 0);
    results.forEach(r => {
      if (r[1] === max) {
        points[r[0]] = (points[r[0]] || 0) + 1;
      }
    });
  }

  return Math.max(...Object.values(points));
};

/* istanbul ignore next */
export const parse = async () =>
  (await loadData(2015, 14)).split('\n').map(line => {
    const res =
      /^([a-z]+) can fly (\d+) km\/s\ for (\d+) seconds, but then must rest for (\d+) seconds\.$/i.exec(
        line
      )!;
    return [res[1], Number(res[2]), Number(res[3]), Number(res[4])] as Reindeer;
  });
