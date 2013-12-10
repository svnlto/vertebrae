/*jshint -W079 */
var Marionette = require('backbone.marionette');

var Handlebars = require('handlebars');

require('../../../helpers/handlebars');

var fs = require('fs');
var tmpl = fs.readFileSync(__dirname + '/../templates/index.html');

var View = Marionette.ItemView.extend({
  template: Handlebars.compile(tmpl, this)
});

module.exports = View;
