/*jshint -W079 */
var app = require('../../helpers/namespace');

app.module('vertebrae', function () {

  'use strict';

  this.addInitializer(function () {
    app.regions = app.rm.addRegions({
      header: 'header',
      section: 'section'
    });
  });

});

module.exports = app;
