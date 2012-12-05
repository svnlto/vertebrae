/*global module:false*/
module.exports = function(grunt) {

  "use strict";

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-testem');

  // Project configuration.
  grunt.initConfig({

    lint: {
      files: [
        'grunt.js',
        'test/app/**/*.js',
        'app/**/*.js'
      ]
    },

    watch: {
      files: ['<config:lint.files>', 'assets/css/app/*.less'],
      tasks: 'lint'
    },

    copy: {
      dist: {
        files: {
          'prod/app/index.html': 'app/index.html',
          'prod/assets/css/': 'assets/css/**'
        }
      }
    },

    testem : {
      browsers : [
        'phantomjs'
      ],
      files : [
        'tests/app/runner.html'
      ]
    },

    jshint: {
      globals: {
        "Backbone": true,
        "_": true,
        "$": true,
        "moment": true,
        "document": true,
        "setTimeout": true,
        "sinon": true,
        "Handlebars": true,
        "app": true,
        "define": true,
        "require": true,
        "jasmine": true,
        "spyOn": true,
        "afterEach": true,
        "it": true,
        "xit": true,
        "describe": true,
        "xdescribe": true,
        "expect": true,
        "beforeEach": true,
        "waits": true,
        "waitsFor": true,
        "runs": true,
        "window" : true,
        "browser": true,
        "node": true,
        "dojo": false,
        "jquery": true,
        "devel": true,
        "console": true
      },
      options: {
        "passfail": false,
        "maxerr": 200,
        "debug": false,
        "devel": false,
        "es5": true,
        "strict": true,
        "globalstrict": false,
        "asi": false,
        "laxbreak": false,
        "bitwise": true,
        "boss": false,
        "curly": true,
        "eqeqeq": true,
        "eqnull": false,
        "evil": false,
        "expr": false,
        "forin": true,
        "immed": true,
        "latedef": true,
        "loopfunc": false,
        "noarg": true,
        "regexp": false,
        "regexdash": false,
        "scripturl": false,
        "shadow": false,
        "supernew": false,
        "undef": true,
        "newcap": true,
        "noempty": true,
        "nonew": false,
        "nomen": false,
        "onevar": false,
        "plusplus": false,
        "sub": false,
        "trailing": true,
        "white": false,
        "multistr": true
      }

    },

    requirejs: {
      js: {
        almond: true,
        replaceRequireScript: [{
          files: ['prod/app/index.html'],
          module: 'main',
          modulePath: 'prod/app/main'
        }],
        baseUrl: "app/",
        optimizeCss: "none",
        optimize: "uglify",
        uglify: {
          "beautify": false,
          "no-dead-code": true,
          "reserved-names": "require"
        },
        inlineText: true,
        useStrict: true,
        findNestedDependencies: true,
        optimizeAllPluginResources: true,
        paths: {
          lib:           '../lib/',
          app:           '.',
          text:          '../lib/require/text',
          jquery:        '../lib/jquery/jquery-min',
          handlebars:    '../lib/handlebars/handlebars',
          underscore:    '../lib/lodash/lodash-0.4.1',
          backbone:      '../lib/backbone/backbone-0.9.2'
        },
        shim: {
          'underscore': {
            attach: '_'
          },
          'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
          }
        },
        out: "prod/app/main.js",
        name: "main"
      }
    }

  });
  // Default task.
  grunt.registerTask('build', 'lint copy requirejs:js');

};
