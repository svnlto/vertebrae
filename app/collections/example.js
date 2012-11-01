//
// ## collections.graphics
//

define([
  'helpers/namespace',
  'collections/base',
  'models/example',
  'app-config'
],

function(app, BaseCollection, Model) {

  "use strict";

  return BaseCollection.extend({

    model: Model,

    url: function() {
      return app.config.get('app').get('apiUrl') + 'examples';
    }

  });

});
