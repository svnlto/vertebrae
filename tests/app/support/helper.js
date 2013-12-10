window.mocha.setup({
  globals: [
    'setTimeout',
    'clearTimeout',
    'setInterval',
    'clearInterval'
  ]
});

var Marionette = require('backbone.marionette');
var Config = require('../../../app/models/config');
var fixture = require('../fixtures/test');

module.exports = (function () {

  'use strict';

  var app = new Marionette.Application();
  var config = new Config().toJSON();

  app.reqres.setHandler('config', function () {
    return config;
  });

  app.start(config);

  before(function () {

    before(function () {
    });

  });

  beforeEach(function () {

    beforeEach(function () {
      var config = app.request('config');

      this.sandbox = sinon.sandbox.create();
      this.server = this.sandbox.useFakeServer();

      this.server.respondWith(
        'GET', '/test', [
          200,
          {'Content-Type': 'application-json'},
          JSON.stringify(fixture.GET)
        ]
      );

      this.server.respondWith(
        'POST', config.api.url + 'test', [
          200,
          {'Content-Type': 'application-json'},
          JSON.stringify(fixture.POST)
        ]
      );

      this.server.respondWith(/(\w*)\/(\d+)/, function (xhr) {
        if (xhr.method === 'DELETE') {
          xhr.respond(200, {}, 'OK');
        }
      });

      this.server.respondWith(/(\w*)\/(\d+)/, function (xhr) {
        if (xhr.method === 'OPTIONS') {
          xhr.respond(200, {}, 'OK');
        }
      });

      this.server.respond();
      this.server.autoRespond = true;
    });

  });

  afterEach(function () {

    afterEach(function () {
      this.sandbox.restore();
    });

  });

  after(function () {

    after(function () {
    });

  });

}());
