//
//  ## models.config
//
//
var BaseModel = require('../helpers/mvc/model');

var Model = BaseModel.extend({

  defaults: {
    app: {
      name: 'app',

      components: {
        'vertebrae-layout': {
          config: {
            template: null
          }
        },
        'app': {
          config: { }
        },

        'index': {
          config: { }
        }
      }
    },

    api: {
      token: null,
      url: null,
      headers: {
        'x-api-version' : '2.1'
      }
    },

    ajax: {
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      timeout: 10000,
      cache: true,
      async: true
    },

    debug: true
  }

});

module.exports = Model;
