import {loadData} from '../shared/utils';

/**
 * Parse a file of Intcode instructions
 */
/* istanbul ignore next */
export const parseIntcode = async (day: number): Promise<Array<number>> => {
  return (await loadData(2019, day)).split(',').map(line => parseInt(line, 10));
};
