module.exports = function (grunt) {
  grunt.initConfig({
    serverfile: './app.js',
    concurrent: {
      dev: {
        tasks: ['hub:app', 'watch:server'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      server: {
        options: {
          file: '<%= serverfile %>',
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
        tasks: ['buildall', 'watch']
      }
    },

    jshint: {
      all_files: {
        src: [
            'gruntfile.js',
            'app.js',
        ]
      },

      options: {
        jshintrc: '../.jshintrc'
      }
    },
    express: {
      server: {
        options: {
          script: './server/app.js'
        }
      }
    },
    watch: {
      server: {
        files: ['server/*.js', './server/tpl/**/*.mustache'],
        tasks: ['jshint', 'express:server'],
        options: {
          nospawn: true,
          atBegin: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-hub');
  grunt.loadNpmTasks('grunt-express-server');

  // for running server without grunt-hub
  grunt.registerTask('default', 'concurrent:dev');
};
