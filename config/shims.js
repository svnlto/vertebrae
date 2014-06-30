module.exports = {
  jquery: {
    exports: '$'
  },
  lodash: {
    exports: '_'
  },
  underscore: {
    exports: '_'
  },
  backbone: {
    exports: 'Backbone',
    depends: {
      lodash: 'lodash',
      jquery: 'jQuery'
    }
  },
  marionette: {
    exports: 'Marionette',
    depends: {
      lodash: 'lodash',
      jquery: 'jQuery',
      backbone: 'Backbone'
    }
  }
};

