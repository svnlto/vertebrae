//
// tests/app/helpers/storage/store
//
//

define([
  'helper',
  'jquery',
  'helpers/storage/store'
],

function (helper, $) {

  'use strict';

  describe('Ajax Helper', function () {

    beforeEach(function () {

      var app = helper.app;

      this.sandbox = sinon.sandbox.create();
      this.ajaxSpy = this.sandbox.spy($, 'ajaxSetup');

      this.ventOnSpy = this.sandbox.spy(app.vent, 'on');
      this.ventTriggerSpy = this.sandbox.spy(app.vent, 'trigger');

      this.ajax = $.ajax({
        url: 'test'
      });

      this.settings = this.ajaxSpy.args[0];

    });

    afterEach(function () {
      this.sandbox.restore();
    });

    describe('Events', function () {

      it.skip('should trigger ajax:start request has started', function (done) {
        var self = this;

        self.ajax.success(function () {
          expect(self.ventTriggerSpy.args[0][0]).to.eql('ajax:start');
          done();
        });

      });

    });

  });

});
