/*
 * grunt-fed
 * https://github.com/crossjs/grunt-fed
 *
 * Copyright (c) 2014 crossjs
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  grunt.registerMultiTask('fed', 'run fed with grunt.', function () {

    var done = this.async();

    var child = grunt.util.spawn({
        cmd: 'fed',
        args: ['server', this.data.config]
      }, function (error, result, code) {
        if (error) {
          console.log(error);
        }
        return done(code);
      });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    return child;

  });

};
