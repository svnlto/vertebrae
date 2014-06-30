var Controller = require('./controllers/index');
var app = require('../../../helpers/namespace');

app.module('app.layout', function () {

  this.addInitializer(function (options) {
    options.app.components.layout.template = require('./templates/index.hbs');

    this._controller = new Controller(
      options.app.components.layout
    );

  });

});

module.exports = app;

