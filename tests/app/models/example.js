//
// tests/app/models/graphics
//

define([
  'models/example'
],

function(Model) {

  "use strict";

  describe("Graphics model", function() {

    beforeEach(function() {
      this.model = new Model();
    });

    it("should have a urlRoot property", function() {
      expect(this.model).to.have.property('urlRoot');
      expect(this.model.urlRoot).to.equal('http://api.outofme.de/graphics');
    });

    it('should have its idAttribute set to _id', function() {
      expect(this.model).to.have.property('idAttribute');
      expect(this.model.idAttribute).to.equal('_id');
    });

  });

});
