//
// tests/app/models/base
//

define([
  'helpers/mvc/model'
],

function(Model) {

  "use strict";

  describe("Base model", function() {

    beforeEach(function() {
      this.model = new Model();
    });

    it('should have its idAttribute set to id', function() {
      expect(this.model).to.have.property('idAttribute');
      expect(this.model.idAttribute).to.equal('id');
    });

  });

});
