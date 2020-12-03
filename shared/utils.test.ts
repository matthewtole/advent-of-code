import {loadData} from './utils';

describe('#loadData', () => {
  test('loads data file for a given year and puzzle', async () => {
    const data = await loadData(2000, 1);
    expect(data).toEqual('Hello');
  });

  test('rejects promise if file does not exist', async () => {
    return expect(loadData(2000, 2)).rejects.toMatch(
      'Cannot load data file for 2000:2'
    );
  });
});
