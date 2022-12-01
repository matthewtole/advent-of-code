import {loadData, max} from '../shared/utils';

export type DataType = number;

/* istanbul ignore next */
export const parse = async (): Promise<Array<DataType>> =>
  (await loadData(2017, 6)).split('\t').map(Number);

function getUniqueConfigurations(
  data: Array<DataType>
): [Array<string>, Array<DataType>] {
  const configurations = [data.join('|')];
  while (true) {
    const configuration = [...data];
    let biggestBank = data.indexOf(max(configuration));
    const blocks = max(configuration);
    configuration[biggestBank] = 0;
    let bank = (biggestBank + 1) % configuration.length;
    for (let b = 0; b < blocks; b += 1) {
      configuration[bank] += 1;
      bank = (bank + 1) % configuration.length;
    }
    data = configuration;
    if (configurations.includes(configuration.join('|'))) {
      break;
    }
    configurations.push(configuration.join('|'));
  }
  return [configurations, data];
}

export const part1 = (data: Array<DataType>): number => {
  return getUniqueConfigurations(data)[0].length;
};

export const part2 = (data: Array<DataType>): number => {
  const [configurations, configuration] = getUniqueConfigurations(data);
  return (
    configurations.length - configurations.indexOf(configuration.join('|'))
  );
};
