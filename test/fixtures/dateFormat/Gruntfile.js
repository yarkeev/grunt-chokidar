module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    echo: {
      one: { message: 'one has changed' }
    },
    watcher: {
      options:{
        dateFormat: function(time) {
          grunt.log.writeln('dateFormat has worked! Done in ' + time + 'ms. Waiting...');
        }
      },
      one: {
        files: ['lib/one.js', 'Gruntfile.js'],
        tasks: 'echo:one',
      }
    }
  });
  // Load the echo task
  grunt.loadTasks('../tasks');
  // Load this chokidar task
  grunt.loadTasks('../../../tasks');
  grunt.registerTask('default', ['echo']);
};
