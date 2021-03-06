module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    watcher: {
      options: {
        spawn: false,
      },
      warn: {
        files: ['lib/*.js'],
        tasks: ['warn'],
      },
      fatal: {
        files: ['lib/*.js'],
        tasks: ['fatal'],
      },
    },
  });

  // Load this chokidar task
  grunt.loadTasks('../../../tasks');

  grunt.registerTask('warn', function() {
    var done = this.async();
    setTimeout(function() {
      grunt.warn('This task should warn!');
      done();
    }, 1000);
  });
  grunt.registerTask('fatal', function() {
    var done = this.async();
    setTimeout(function() {
      grunt.fatal('This task should be fatal!');
      done();
    }, 1000);
  });
};
