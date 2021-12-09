import {loadData} from '../shared/utils';

type Coordinate = [number, number];
export type DataType = [Coordinate, Coordinate];

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2021, 5)).split('\n').map(row => {
    const [c1, c2] = row.split(' -> ');
    return [
      c1.split(',').map(Number) as [number, number],
      c2.split(',').map(Number) as [number, number],
    ];
  });

const isHorizontalLine = (line: DataType): boolean => line[0][1] === line[1][1];
const isVerticalLine = (line: DataType): boolean => line[0][0] === line[1][0];

export const generatePointsForLine = ([p1, p2]: DataType): Array<string> => {
  const unit = [
    p1[0] < p2[0] ? 1 : p1[0] > p2[0] ? -1 : 0,
    p1[1] < p2[1] ? 1 : p1[1] > p2[1] ? -1 : 0,
  ];
  let point = p1;
  let points: Array<string> = [];
  while (true) {
    points.push(point.join(','));
    if (point[0] === p2[0] && point[1] === p2[1]) {
      return points;
    }
    point = [point[0] + unit[0], point[1] + unit[1]];
  }
};

const getNumberOfOverlaps = (lines: Array<DataType>): number => {
  let points: Record<string, number> = {};
  lines.forEach(line => {
    generatePointsForLine(line).forEach(p => {
      points[p] = (points[p] ?? 0) + 1;
    });
  });

  return Object.values(points).filter(p => p > 1).length;
};

export const part1 = (data: Array<DataType>): number =>
  getNumberOfOverlaps(
    data.filter(line => isHorizontalLine(line) || isVerticalLine(line))
  );

export const part2 = (data: Array<DataType>): number =>
  getNumberOfOverlaps(data);
