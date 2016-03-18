#!/usr/bin/env node
import { install } from 'source-map-support';
install();

import path from 'path';
import fs from 'fs';
import { ncp } from 'ncp';
import colors from 'colors';

var folderName = process.argv[2];
if(!folderName){
    folderName = 'new-es6-repo';
}

var source = path.normalize(path.join(__dirname, '..', 'repo'));
var destination = path.join(process.cwd(),folderName);

console.log(`Creating new folder: ${folderName}`);

fs.mkdir(folderName, function(err) {
    //TODO: Catch error when same-named directory already exists to prevent
    // writing files into existing directory
	if (err) {
        if(err.code == 'EEXIST'){
            return console.log(`Directory '${folderName}' already exists. Please specify a different directory name.`.red);
        } else {
            return console.log(err);
        }
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
