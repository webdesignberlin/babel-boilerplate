import { install } from 'source-map-support';
install();

import printer from './someModule.js';

printer();
console.log([1,2,3].map(x => x * x));

throw new Error('Test! ');
