import {loadData} from '../shared/utils';

type Ingredient = [number, number, number, number, number];

const calculateProperty = (
  ingredients: Array<Ingredient>,
  ratios: Array<number>,
  property: number
) =>
  Math.max(
    ingredients.reduce((sum, ingredient, index) => {
      return sum + ingredient[property] * ratios[index];
    }, 0),
    0
  );

export const calculateCookie = (
  ingredients: Array<Ingredient>,
  ratios: Array<number>
): number =>
  [0, 1, 2, 3].reduce(
    (product, property) =>
      calculateProperty(ingredients, ratios, property) * product,
    1
  );

export const calculateCalories = (
  ingredients: Array<Ingredient>,
  amounts: Array<number>
): number => calculateProperty(ingredients, amounts, 4);

const generatePossibleRatios = () => {
  const possibleRatios: Array<Array<number>> = [];
  for (let a = 1; a <= 97; a += 1) {
    for (let b = 1; b <= 97; b += 1) {
      for (let c = 1; c <= 97; c += 1) {
        for (let d = 1; d <= 97; d += 1) {
          if (a + b + c + d === 100) {
            possibleRatios.push([a, b, c, d]);
          }
        }
      }
    }
  }
  return possibleRatios;
};

const findBestRatio = (
  ingredients: Array<Ingredient>,
  ratios: Array<Array<number>>
) =>
  ratios.reduce(
    (max, ratio) => Math.max(max, calculateCookie(ingredients, ratio)),
    0
  );

export const part1 = (ingredients: Array<Ingredient>): number =>
  findBestRatio(ingredients, generatePossibleRatios());

export const part2 = (ingredients: Array<Ingredient>): number =>
  findBestRatio(
    ingredients,
    generatePossibleRatios().filter(
      ratio => calculateCalories(ingredients, ratio) === 500
    )
  );

export const parse = async () =>
  (await loadData(2015, 15)).split('\n').map(line => {
    const res = /^[a-z]+: [a-z]+ ([-\d]+), [a-z]+ ([-\d]+), [a-z]+ ([-\d]+), [a-z]+ ([-\d]+), [a-z]+ ([-\d]+)$/i.exec(
      line
    )!;
    return [
      Number(res[1]),
      Number(res[2]),
      Number(res[3]),
      Number(res[4]),
      Number(res[5]),
    ] as Ingredient;
  });
