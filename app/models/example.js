//
// ## models.example
//

define([
  'helpers/namespace',
  'models/base',
  'app-config'
],

function(app, BaseModel) {

  "use strict";

  return BaseModel.extend({
    urlRoot : app.config.get('app').get('apiUrl') + 'examples'
  });

});
