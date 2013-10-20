module.exports = function (grunt) {
  grunt.initConfig({
    files: {
      js: ['Gruntfile.js', 'app.js'],
      less: ['less/**/*']
    },
    watch: {
      js: {
        files: ['<%= files.js %>'],
        tasks: ['jshint', 'requirejs:client']
      },
      less: {
        files: ['<%= files.less %>'],
        tasks: ['recess:client']
      }
    },
    jshint: {
      options: {
        jshintrc: '../.jshintrc'
      },
      files: {
        src: [
          '*.js'
        ]
      }
    },
    requirejs: {
      client: {
        options: {
          wrap: true,
          baseUrl: './',
          almond: true,
          out: '../media/js/app.js',
          include: 'app',
          enforceDefine: true,
          name: 'bower_components/almond/almond',
          paths: {
            underscore: 'bower_components/lodash/dist/lodash'
          }
        }
      }
    },
    recess: {
      client: {
        options: {
          compile: true
        },
        files: {
          '../media/css/app.css': ['less/app.less']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('setup', ['requirejs:client', 'recess:client']);

};
