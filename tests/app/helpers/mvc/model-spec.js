//
// tests/app/models/base
//

define([
  'helpers/mvc/model'
],

function (Model) {

  'use strict';

  describe('Base model', function () {

    beforeEach(function () {
      this.model = new Model();
    });

    it('should have its idAttribute set to id', function () {
      expect(this.model).to.have.property('idAttribute');
      expect(this.model.idAttribute).to.eql('id');
    });

    it('should be an instance of Backbone.Model', function () {
      expect(this.model instanceof Backbone.Model).to.be.ok();
    });

  });

});
