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

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    var content = grunt.file.read(filepath);
            
                    var classless = noclass.classFromFile(content, options.keepclasses);

                    // Write the destination file.
                    grunt.file.write(f.dest, classless);
                    grunt.log.writeln('Classes removed from ' + f.src + ', and saved to ' + f.dest);
                }
            });
            // Handle options.
            
            
            
        });
    });
};
