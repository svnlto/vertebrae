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
      name: 'app',
      apiUrl: 'http://localhost/',
      ajaxTimeout: 5000,
      ajaxCache: true,
      debug: true
    }

  });

});
