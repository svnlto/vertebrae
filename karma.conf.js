// Karma configuration
// Generated on Tue Feb 18 2014 22:59:35 GMT+0100 (CET)

module.exports = function (config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'node_modules/jquery/dist/jquery.js', watched: false, included: true },
      { pattern: 'node_modules/expect.js/expect.js', watched: false, included: true },
      { pattern: 'node_modules/sinon/pkg/sinon-1.8.2.js', watched: false, included: true },
      'tests/helpers/runner.js',

      'tests/app/helpers/namespace-spec.js',

    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],

    preprocessors: {
      'tests/app/**/*-spec.js': ['browserify'],
      'tests/helpers/runner.js': ['browserify']
    },

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
