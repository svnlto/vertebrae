var app = require('../../../helpers/namespace');
var Marionette = require('backbone.marionette');
var Handlebars = require('handlebars');

require('../../../helpers/handlebars')

var fs = require('fs');
var tmpl = fs.readFileSync(__dirname + '/../templates/index.hbs');

var View = Marionette.ItemView.extend({
  template: Handlebars.compile(tmpl, this)
});

module.exports = View;
