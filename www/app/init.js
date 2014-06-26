var Config = require('./models/config');
var app = require('./helpers/namespace');

// boot global helpers
require('./helpers/storage/store');
require('./helpers/handlebars');

// boot up default structural components
require('./components/structural/layout/index');

// start the pocket component
require('./components/app/index');

// start app
app.start(new Config().toJSON());

module.exports = app;

