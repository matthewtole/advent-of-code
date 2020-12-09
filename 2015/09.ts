import {loadData, permute} from '../shared/utils';

type Distance = [string, string, number];

function calculateDirectDistance(
  distances: Array<Distance>,
  locationA: string,
  locationB: string
): number {
  const distance = distances.find(
    d =>
      (d[0] === locationA && d[1] === locationB) ||
      (d[0] === locationB && d[1] === locationA)
  );
  return distance ? distance[2] : -1;
}

const getLocations = (distances: Array<Distance>): Array<string> =>
  distances.reduce((locations, d) => {
    if (!locations.includes(d[0])) {
      locations.push(d[0]);
    }
    if (!locations.includes(d[1])) {
      locations.push(d[1]);
    }
    return locations;
  }, [] as Array<string>);

const calculateTotalDistance = (
  distances: Array<Distance>,
  route: Array<string>
): number => {
  return route.slice(1).reduce((d, location, index) => {
    const directDistance = calculateDirectDistance(
      distances,
      location,
      route[index]
    );
    if (directDistance === -1) {
      console.log(`Could not find a route from ${location} to ${route[index]}`);
      return Infinity;
    }
    return d + directDistance;
  }, 0);
};

export const part1 = (distances: Array<Distance>): number =>
  permute(getLocations(distances)).reduce(
    (min, route) => Math.min(min, calculateTotalDistance(distances, route)),
    Infinity
  );

export const part2 = (distances: Array<Distance>): number =>
  permute(getLocations(distances)).reduce(
    (max, route) => Math.max(max, calculateTotalDistance(distances, route)),
    0
  );

/* istanbul ignore next */
export const parse = async () =>
  (await loadData(2015, 9)).split('\n').map(row => {
    const res = /^([a-z]+) to ([a-z]+) = ([0-9]+)$/i.exec(row);
    if (!res) {
      throw new Error('Could not parse: ' + row);
    }
    return [res[1], res[2], Number(res[3])] as Distance;
  });
