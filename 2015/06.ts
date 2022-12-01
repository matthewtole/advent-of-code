import {loadData} from '../shared/utils';

function makeLights<T>(initial: T): Array<Array<T>> {
  return new Array(1000).fill(0).map(() => new Array(1000).fill(initial));
}

function updateLights<T>(
  lights: Array<Array<T>>,
  instructions: Array<string>,
  updateLight: (light: T, instruction: string) => T
) {
  instructions.forEach(instruction => {
    const res = /^([a-z\ ]+)\ (\d+),(\d+)\ through (\d+),(\d+)$/.exec(
      instruction
    );
    /* istanbul ignore next */
    if (!res) {
      return;
    }
    const [minX, minY, maxX, maxY] = res.slice(2, 6).map(i => parseInt(i, 10));
    for (let y = minY; y <= maxY; y += 1) {
      for (let x = minX; x <= maxX; x += 1) {
        lights[y][x] = updateLight(lights[y][x], res[1]);
      }
    }
  });
}

export const part1 = (input: Array<string>): number => {
  const lights = makeLights(false);
  updateLights(lights, input, (light: boolean, instruction: string) => {
    switch (instruction) {
      case 'turn off':
        return false;
      case 'turn on':
        return true;
      case 'toggle':
        return !light;
      default:
        return light;
    }
  });
  return lights.reduce(
    (total, row) => row.reduce((t, l) => t + (l ? 1 : 0), total),
    0
  );
};

export const part2 = (input: Array<string>): number => {
  const lights = makeLights(0);
  updateLights(lights, input, (light: number, instruction: string) => {
    switch (instruction) {
      case 'turn off':
        return Math.max(light - 1, 0);
      case 'turn on':
        return light + 1;
      case 'toggle':
        return light + 2;
      default:
        return light;
    }
  });
  return lights.reduce((total, row) => row.reduce((t, l) => t + l, total), 0);
};

/* istanbul ignore next */
export const parse = async () => (await loadData(2015, 6)).split('\n');
