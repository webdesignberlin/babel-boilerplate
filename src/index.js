#!/usr/bin/env node
import { install } from 'source-map-support';
install();

import path from 'path';
import { ncp } from 'ncp';

var source = path.normalize(path.join(__dirname, '..', 'repo'));
var destination = process.cwd();

console.log(`\nCopying es6-babel boilerplate directory from: \n${source}\n to: \n${destination}\n ...`);

ncp(source, destination, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('\nCopying complete');
 console.log('run $ npm install && npm run dev\n');
});
