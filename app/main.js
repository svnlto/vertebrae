var Config = require('./models/config');

require('./helpers/storage/store');
require('./helpers/handlebars');

require('./components/vertebrae-layout/index');
require('./components/index/index');

app.start(new Config().toJSON());

module.exports = app;

