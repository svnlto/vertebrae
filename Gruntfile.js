module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'Gruntfile.js',
        'tests/app/**/*.js',
        'app/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'shell:test']
    },

    copy: {
      dist: {
        files: {
          'prod/app/index.html': 'app/index.html',
          'prod/assets/css/app/': 'assets/css/**'
        }
      }
    },

    shell: {
      test: {
        command: 'node node_modules/karma/bin/karma start',
        options: {
          stdout: true,
          stderr: true
        }
      }
    },

    requirejs: {
      production: {
        options: {
          almond: true,
          replaceRequireScript: [{
            files: ['prod/app/index.html'],
            module: 'main',
            modulePath: 'app/main'
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
            app:           '.',
            text:          '../lib/require-text/text',
            hbs:           '../lib/backbone.marionette.hbs/backbone.marionette.hbs',
            jquery:        '../lib/jquery/jquery',
            handlebars:    '../lib/handlebars/handlebars',
            lodash:        '../lib/lodash/lodash',
            backbone:      '../lib/backbone/backbone',
            marionette:    '../lib/backbone.marionette/lib/backbone.marionette'
          },
          shim: {
            'backbone': {
              deps: ['lodash', 'jquery'],
              exports: 'Backbone'
            },

            'marionette': {
              deps: ['backbone'],
              exports: 'Backbone.Marionette'
            },

            'handlebars': {
              exports: 'Handlebars'
            }
          },
          out: "prod/app/main.js",
          name: "main"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['shell:test']);
  grunt.registerTask('build', ['jshint', 'copy', 'requirejs']);

};
