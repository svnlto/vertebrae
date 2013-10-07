module.exports = function (grunt) {

  'use strict';

  grunt.registerTask('template_builder', function () {

    var options = grunt.config.get('template_builder.options');
    var list = [];
    var files = grunt.file.expand(options.src);

    files.forEach(function (file) {
      if ((/\.(html)$/i).test(file)) {
        list.push('\'text!' +  file.split('/').splice(1).join('/') + '\'');
      }
    });

    grunt.file.write(
      options.dest, 'define([' + list.join(',\n') + '\n], function () {});'
    );

  });
};
