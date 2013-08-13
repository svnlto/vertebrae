// Karma configuration
// Generated on Tue Aug 13 2013 10:37:52 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      // put all components in requirejs 'paths' config here (included: false)
      //{ pattern: 'lib/**/*.js', watched: false, included: false},
      { pattern: 'app/**/*.js', watched: true, included: false},

      // all src and test modules (included: false)
      { pattern: 'tests/app/collections/*.js', watched: true, included: false },
      { pattern: 'tests/app/models/*.js', watched: true, included: false },
      { pattern: 'tests/app/views/*.js', watched: true, included: false },

      // libs required for test framework
      { pattern: 'tests/lib/sinon.js', watched: false, included: true },
      { pattern: 'lib/expect/expect.js', watched: false, included: true},

      // app config require module last
      { pattern: 'lib/requirejs-text/text.js', watched: false, included: false},
      { pattern: 'lib/jquery/jquery.js', watched: false, included: false},
      { pattern: 'lib/lodash/lodash.js', watched: false, included: false},
      { pattern: 'lib/backbone/backbone.js', watched: false, included: false},
      { pattern: 'lib/backbone.marionette/lib/backbone.marionette.js', watched: false, included: false},
      { pattern: 'lib/handlebars/handlebars.js', watched: false, included: false},
      { pattern: 'lib/backbone.marionette.hbs/backbone.marionette.hbs.js', watched: false, included: false},

      'tests/app/config.js'
    ],


    // list of files to exclude
    exclude: [
      'app/config.js'
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
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
