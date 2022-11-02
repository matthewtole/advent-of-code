import {execute} from '../shared/utils';

const days: Array<() => Promise<void>> = [];

execute(days).then();
