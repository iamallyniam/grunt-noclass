/*
 * grunt-noclass
 * https://github.com/iamallyniam/grunt-noclass
 *
 * Copyright (c) 2017 Allyn Thomas
 * Licensed under the MIT license.
 */

'use strict';

var noclass = require('noclass');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('noclass', 'Remove class names from html files, usefull after inlining css for building mailers', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            keepclasses: []
        });

        
        this.files.forEach(function (file) {
            var src = file.src[0];
            if (!src) {
                return;
            }
            
            var contents = grunt.file.read(src);
            var classless = noclass.classFromString(contents, options.keepclasses);
            grunt.file.write(file.dest, classless);
            grunt.log.writeln('Classes removed from ' + src + ', and saved to ' + file.dest);
        });
        
    });
};