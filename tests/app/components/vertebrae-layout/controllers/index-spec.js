//
// tests/app/components/vertebrae-layout/controllers/index
//

define([
  'helpers/namespace',
  'components/vertebrae-layout/controllers/index'
],

function (app, IndexController) {

  'use strict';

  describe('Layout Controller', function () {

    describe('Instance', function () {

      it('should have a index property', function () {
        expect(IndexController.prototype).to.have.property('initialize');
      });

      it('should have a _addLayout property', function () {
        expect(IndexController.prototype).to.have.property('_addLayout');
      });

    });

  });

});
