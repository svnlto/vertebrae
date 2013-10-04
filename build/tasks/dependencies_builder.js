module.exports = function(grunt) {

  'use strict';

  grunt.registerTask('dependencies_builder', function() {

    var options = grunt.config.get('dependencies_builder.options'),
        list = [],
        files = grunt.file.expand(options.src);

    files.forEach(function(file) {
      if ((/\.(js)$/i).test(file)) {
        list.push( '\'' + file.split('/').splice(1).join('/').slice(0, -3) + '\'');
      }
    });

    grunt.file.write(
      options.dest, 'define([' + list.join(',\n') + '\n], function () {});'
    );

  });
};

