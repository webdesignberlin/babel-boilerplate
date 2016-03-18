#!/usr/bin/env node
import { install } from 'source-map-support';
install();

import path from 'path';
import { ncp } from 'ncp';

var source = path.normalize(path.join(__dirname, '..', 'repo'));
var destination = process.cwd();

console.log(source);
console.log(destination);
ncp(source, destination, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});
