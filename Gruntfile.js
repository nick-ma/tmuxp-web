module.exports = function (grunt) {
  grunt.initConfig({
    serverFile: 'simpleserver.js',
    concurrent: {
      dev: {
        tasks: ['nodemon', 'hub:client', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
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
    shell: {
      nodemon: {
        command: 'nodemon <%= serverFile %>',
        options: {
          stdout: true,
          stderr: true
        }
      }
    },
    hub: {
      client: {
        src: ['client/Gruntfile.js'],
        tasks: ['setup', 'watch']
      }
    },
    jshint: {
      all_files: {
        src: [
            'Gruntfile.js',
            '<%= files.manifest %>',
            '<%= files.server %>'
        ]
      },

      options: {
        jshintrc: '.jshintrc'
      }
    },
    files: {
      manifest: ['Gruntfile.js', 'bower.js'],
      server: ['simpleserver.js']
    },
    watch: {
      files: ['*.js'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-hub');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'concurrent:dev');
};
