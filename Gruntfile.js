/*global module:false*/

module.exports = function (grunt) {

  'use strict';

  // custom tasks
  grunt.loadTasks('build/tasks/');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-groc');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-lintblame');
  grunt.loadNpmTasks('grunt-browserify');

  // Project configuration.
  grunt.initConfig({

    lintblame: {
      files: [
        'Gruntfile.js',
        'karma.conf.js',
        'app/**/*.js',
        'tests/**/*-spec.js',
        'tests/app/config.js',
        'src/**/**/*'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: ['<%= lintblame.files %>', 'assets/less/**/*.less', 'app/**/*.less', '!app/compiled/*'],
      tasks: ['browserify']
    },

    copy: {
      dist: {
        files: {
          'prod/app/index.html': 'app/index.html',
          'prod/': ['assets/images/*', 'assets/css/*']
        }
      }
    },

    recess: {
      white: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'assets/css/app.css' : ['assets/less/themes/app.less']
        }
      }
    },

    browserify: {
      build: {
        options: {
          standalone: 'app',
          //debug: true,
          transform: [
            'brfs'
          ],
          shim: {
            jquery: {
              path: 'lib/jquery/jquery.js',
              exports: '$'
            },
            lodash: {
              path: 'lib/lodash/dist/lodash.js',
              exports: '_'
            },
            underscore: {
              path: 'lib/underscore/underscore.js',
              exports: '_'
            },
            handlebars: {
              path: 'lib/handlebars/handlebars.js',
              exports: 'Handlebars'
            },
            backbone: {
              path: 'lib/backbone/backbone.js',
              exports: 'Backbone',
              depends: {
                underscore: 'underscore'
              }
            },
            'backbone.babysitter': {
              path: 'lib/backbone.babysitter/lib/backbone.babysitter.js',
              exports: 'Backbone.Babysitter',
              depends: {
                backbone: 'Backbone'
              }
            },
            'backbone.wreqr': {
              path: 'lib/backbone.wreqr/lib/backbone.wreqr.js',
              exports: 'Backbone.Wreqr',
              depends: {
                backbone: 'Backbone'
              }
            },
            'backbone.marionette': {
              path: 'lib/backbone.marionette/lib/backbone.marionette.js',
              exports: 'Marionette',
              depends: {
                jquery: '$',
                backbone: 'Backbone',
                underscore: '_'
              }
            }
          }
        },

        src: ['app/main.js'],
        dest: '_dist/js/built.js'
      }
    }

  });

  // Default task.
  grunt.registerTask('default', 'lintblame');

  grunt.registerTask('test', ['lintblame', 'karma']);
  grunt.registerTask('build', ['lintblame', 'karma', 'recess', 'copy', 'requirejs', 'comment_builder']);
  grunt.registerTask('docs', 'groc');

};
