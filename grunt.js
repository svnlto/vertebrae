/*global module:false*/
var fs = require('fs'),
    jshintOptions = JSON.parse(fs.readFileSync('./.jshintrc'));

module.exports = function(grunt) {

  "use strict";

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

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

    jshint: {
      options: jshintOptions
    },

    shell: {
      test: {
        command: 'node node_modules/testem/testem.js ci',
        stdout: true
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
        insertRequire: ['main'],
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
