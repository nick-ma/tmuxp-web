module.exports = function (grunt) {
  grunt.initConfig({
    serverFile: './app.js',
    concurrent: {
      server: {
        tasks: ['nodemon', 'watch:server'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      server: {
        options: {
          file: '<%= serverFile %>',
          args: ['production'],
          ignoreFiles: ['node_modules/**'],
          watchedExtensions: ['js', 'mustache'],
          watchedFolders: ['.', 'tpl'],
          debug: false,
          delayTime: 1
        },
        exec: {
          options: {
            exec: 'node'
          }
        }
      }

    },
    hub: {
      app: {
        src: ['app/Gruntfile.js'],
        tasks: ['setup', 'watch']
      }
    },
    jshint: {
      all_files: {
        src: [
            'Gruntfile.js',
            'app.js',
        ]
      },

      options: {
        jshintrc: '../.jshintrc'
      }
    },
    watch: {
      server: {
        files: ['*.js'],
        tasks: ['jshint'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  // for running server without grunt-hub
  grunt.registerTask('stand-alone', 'concurrent:server');
};
