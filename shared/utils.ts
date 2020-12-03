import * as fs from 'fs';

/**
 * Parse the puzzle input file ready for processing
 */
export const loadData = (year: number, day: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `./${year}/data/${day.toString().padStart(2, '0')}.txt`,
      (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data.toString());
      }
    );
  });
};
