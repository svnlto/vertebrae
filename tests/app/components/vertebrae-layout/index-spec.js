//
// tests/app/components/vertebrae-layout/index
//

define([
  'helpers/namespace',
  'components/vertebrae-layout/index'
],

function (app) {

  'use strict';

  describe('Layout Module', function () {

    describe('Initialisation', function () {

      it('should expose layout module', function () {
        expect(app.layout).to.be.ok();
      });

      it('should be of type \'Marionette.Module\'', function () {
        expect(app.layout.moduleName).to.eql('layout');
      });

    });

  });

});

