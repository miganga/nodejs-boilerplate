/**
 * @desc
 *  config.js for all folder, environment & etc. configuration
 *  tasks folder includes all gulp tasks in seperate files
 *  gulp command runs tasks development tasks
 */

'use strict';

var fs = require('fs'),
    tasks = fs.readdirSync('./gulp/tasks/');

require('./config');

tasks.forEach(function (task) {
    require('./tasks/' + task);
});