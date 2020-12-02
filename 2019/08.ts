import * as fs from 'fs';

/*
https://adventofcode.com/2019/day/7
*/

export const part1 = (image: Array<Array<Array<number>>>): number => {
  let leastEmptyPixelsCount = Infinity;
  let leastEmptyPixelsIndex = -1;

  image.forEach((layer, index) => {
    let emptyPixels = countPixels(layer, 0);
    if (emptyPixels < leastEmptyPixelsCount) {
      leastEmptyPixelsCount = emptyPixels;
      leastEmptyPixelsIndex = index;
    }
  });

  return (
    countPixels(image[leastEmptyPixelsIndex], 1) *
    countPixels(image[leastEmptyPixelsIndex], 2)
  );
};

export const part2 = (image: Array<Array<Array<number>>>): string => {
  const flat = flattenImage(image);
  return flat.map(row => row.map(p => (p ? 'X' : ' ')).join('')).join('\n');
};

const countPixels = (layer: Array<Array<number>>, pixel: number): number => {
  return layer.reduce((count, row) => {
    return row.filter(p => p === pixel).length + count;
  }, 0);
};

export const flattenImage = (
  image: Array<Array<Array<number>>>
): Array<Array<number>> => {
  const height = image[0].length;
  const width = image[0][0].length;

  const flattened: Array<Array<number>> = [];
  for (let y = 0; y < height; y += 1) {
    const row: Array<number> = [];
    for (let x = 0; x < width; x += 1) {
      let pixel = 2;
      for (let l = 0; l < image.length; l += 1) {
        pixel = image[l][y][x];
        if (pixel !== 2) {
          break;
        }
      }
      row.push(pixel);
    }
    flattened.push(row);
  }

  return flattened;
};

export const parseImageString = (
  data: string,
  width: number,
  height: number
): Array<Array<Array<number>>> => {
  const pixels = data.split('').map(p => parseInt(p, 10));
  const numLayers = pixels.length / (width * height);
  const image: Array<Array<Array<number>>> = [];
  for (let l = 0; l < numLayers; l += 1) {
    const layer = [];
    const layerPixels = pixels.slice(
      l * (width * height),
      (l + 1) * (width * height)
    );
    for (let y = 0; y < height; y += 1) {
      layer.push(layerPixels.slice(y * width, (y + 1) * width));
    }
    image.push(layer);
  }
  return image;
};

/**
 * Parse the puzzle input file ready for processing
 */
export const parse = (
  width: number,
  height: number
): Promise<Array<Array<Array<number>>>> => {
  return new Promise((resolve, reject) => {
    fs.readFile('./2019/data/08.txt', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(parseImageString(data.toString(), width, height));
    });
  });
};
