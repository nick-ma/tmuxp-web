module.exports = function (grunt) {
  grunt.initConfig({
    hub: {
      app: {
        src: ['./app/Gruntfile.js'],
        tasks: ['buildall'], // build LESS and JS files once at start

      },
      server: {
        src: ['./server/Gruntfile.js'],
        tasks: ['nodemon:server'] // start up express server
      }
    },
    watch: {
      app: {
        files: ['./app/Gruntfile.js'],

      },
      server: {
        files: ['./server/Gruntfile.js'],
      }
    },

  });

  grunt.loadNpmTasks('grunt-hub');

  grunt.registerTask('default', ['hub', 'watch']);
};
