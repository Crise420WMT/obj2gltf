'use strict';
var eventStream = require('event-stream');
var fsExtra = require('fs-extra');
var Promise = require('bluebird');

module.exports = readLines;

/**
 * Read a file line-by-line.
 *
 * @param {String} path Path to the file.
 * @param {Function} callback Function to call when reading each line.
 * @returns {Promise} A promise when the reader is finished.
 *
 * @private
 */
function readLines(path, callback) {
	var str = '';
	var bTrue = false;
	// var index = 0;
    return new Promise(function(resolve, reject) {
        fsExtra.createReadStream(path)
            .on('error', reject)
            .on('end', resolve)
            .pipe(eventStream.split())
            .pipe(eventStream.mapSync(function (line) {
            	if (line.charAt(line.length-1) == '\\') {
            		// debugger;
            		// line = line.substring(0,line.length-2);
            		str = line.substring(0,line.length-2);
            		// arr.push(line);
            		// // callback(line+arr[arr.le]);
            		// index++;
            		bTrue = true;
            		return;
            	}
            	if (bTrue) {
            		// debugger
            		// if (line.charAt(0) != ' ') line = ' ' + line;
            		line = str + line;
            		callback(line);
            		bTrue = false;
            	} else {
	            	callback(line);
            	}
            }));
    });
}
