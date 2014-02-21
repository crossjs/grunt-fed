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

    var spawn = grunt.util.spawn({
        cmd: 'fed',
        args: ['server', this.data.config]
      }, function (error, result, code) {
        if (error) {
          console.log(error);
        }
        return done(code);
      });

    console.log('listening at port '.cyan +
        grunt.file.readJSON(this.data.config).server.port.green);

    return spawn;

  });

};
