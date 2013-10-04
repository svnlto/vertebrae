module.exports = function (grunt) {

  'use strict';

  grunt.registerTask('comment_builder', 'Append current application version', function () {

    var done = this.async();
    var fs = require('fs');
    var input = process.cwd() + '/' + grunt.config('comment_builder.options.src');

    grunt.log.writeln('Processing task...');

    var packageJson = grunt.file.readJSON('package.json');
    var generatedAt = new Date().toISOString().split('.')[0];

    var tmpl = '\n<!-- \n';
    tmpl += 'name: ' + packageJson.name + '\n';
    tmpl += 'generated: ' + generatedAt + '\n';
    tmpl += 'version: ' + packageJson.version;
    tmpl += '\n-->\n';

    fs.appendFile(input, tmpl, function (err) {
      if (err) {
        done(err);
      } else {
        grunt.log.ok('name: ' + packageJson.name + ' generated: ' + generatedAt + ' version: ' + packageJson.version);
        done();
      }
    });

  });

};
