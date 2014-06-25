/*global module:false*/
var shims = require('./config/shims');
var sharedModules = Object.keys(shims).concat([
  // place all modules you want in the lib build here
]);

module.exports = function (grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    pkg: require('./package.json'),
    cfg: {},

    jshint: {
      files: [
        'Gruntfile.js',
        'www/app/**/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: [
        '<%= jshint.files %>',
        'www/app/**/*.html'
      ],
      tasks: ['jshint', 'browserify']
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'www',
          hostname: '0.0.0.0',
          middleware: function (connect, options) {
            return [
              connect.static(options.base),
              connect.directory(options.base)
            ];
          }
        },
      }
    },

    browserify: {
      lib: {
        files: {
          'www/dist/libs.js': ['www/lib/libs.js']
        },
        options: {
          transform: ['browserify-shim'],
          require: sharedModules
        }
      },
      main: {
        files: {
          'www/dist/app.js': ['www/app/init.js']
        },
        options: {
          transform: ['hbsfy'],
          external: sharedModules
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'www/dist/<%= pkg.name %>.min.js': ['www/dist/libs', 'www/dist/app.js']
        }
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },

      continuous: {
        singleRun: true,
        browsers: [
          'PhantomJS'
        ]
      },

      dev: {
        singleRun: true,
        browsers: [
          'PhantomJS'
        ]
      },

      coverage: {
        reporters: ['progress', 'coverage'],
        preprocessors: {
          'app/**/*.js': ['coverage']
        },
        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        }
      }
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['jshint', 'browserify:app', 'uglify']);
  grunt.registerTask('test', ['jshint', 'karma:dev']);

  grunt.registerTask('serve', [
    'connect:server',
    'configureProxies:server',
    'watch'
  ]);

};
