#!/usr/bin/env node
import { install } from 'source-map-support';
install();

import path from 'path';
import { ncp } from 'ncp';
import mkdirp from 'mkdirp';

var folderName = process.argv[2];
if(!folderName){
    folderName = 'new-es6-repo';
}

var source = path.normalize(path.join(__dirname, '..', 'repo'));
var destination = process.cwd();

console.log(`folderName: ${folderName}`);
console.log(`source: ${source}`);
console.log(`destination: ${destination}`);
console.log(`Creating new folder: ${folderName}`);

try{
mkdirp(folderName, function(err) {
	if (err) {
		throw err;
	}

    console.log(`Copying es6-babel boilerplate directory from: \n${source}\n to: \n${destination}\n ...`);
    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('\nCopying complete');
        console.log('run $ npm install && npm run dev\n');
    });
});
} catch(e) {
    console.log(e);
}
