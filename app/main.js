/*jshint -W079 */
var Config = require('./models/config');
var app = require('./helpers/namespace');

require('./helpers/storage/store');
require('./helpers/handlebars');

require('./components/vertebrae/index');
require('./components/vertebrae-layout/index');
require('./components/index/index');

app.start(new Config().toJSON());

module.exports = app;

