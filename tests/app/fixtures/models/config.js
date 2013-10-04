//
//  ## models.config
//

define([
  'helpers/mvc/model'
],

function (BaseModel) {

  'use strict';

  return BaseModel.extend({

    defaults: {
      app: {
        name: 'app',

        components: {
          'vertebrae-layout': {
            name: 'vertebrae-layout',
            path: 'components/vertebrae-layout',
            config: {
              template: null
            }
          },
          'app': {
            name: 'app',
            path: 'components/app',
            config: { }
          },

          'index': {
            name: 'index',
            path: 'components/index',
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

});
