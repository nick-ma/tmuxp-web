module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      js: {
        files: ['Gruntfile.js', 'app.js'],
        tasks: ['jshint', 'requirejs:app']
      },
      less: {
        files: ['less/**/*'],
        tasks: ['recess:app']
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
      app: {
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
      app: {
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

  grunt.registerTask('buildall', ['requirejs:app', 'recess:app']);

};
