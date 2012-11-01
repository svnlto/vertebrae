module.exports = function(grunt) {

  "use strict";

  grunt.registerTask('cache_bust', function() {

    var files = grunt.config.get('cache_bust.dist.files'),
        packageJson = grunt.file.readJSON('package.json'),
        version = packageJson.version,
        semver = require('semver'),
        buildVersion = semver.inc(version, 'build');

    var indexCurrent = grunt.file.read(files[0]),
        indexAltered = indexCurrent.replace('app/main', "app/main-" + buildVersion + ""),
        indexCssAltered = indexAltered.replace('outofme.css', "outofme-" + buildVersion + ".css");

    var mainCurrent = grunt.file.read(files[1]);
    var cssCurrent = grunt.file.read(files[2]);

    grunt.file.write("prod/app/index.html" ,indexCssAltered);
    grunt.file.write("prod/app/main-" + buildVersion + ".js", mainCurrent);
    grunt.file.write("prod/assets/css/outofme/outofme-" + buildVersion + ".css", cssCurrent);

  });

};
