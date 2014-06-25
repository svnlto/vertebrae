var BaseModel = require('../helpers/mvc/model');

var Model = BaseModel.extend({

  defaults: {
    app: {
      name: 'snug',
      components: {
        'layout': {
          config: {
            template: null
          }
        }
      }
    },

    api: {
      url: '/_api/'
    },

    ajax: {
      dataType: 'json',
      timeout: 10000,
      cache: true,
      async: true
    },

    debug: true
  }

});

module.exports = Model;

