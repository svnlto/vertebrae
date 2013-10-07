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

      this.ajaxSpy = this.sandbox.spy($, 'ajaxSetup');

      this.ventOnSpy = this.sandbox.spy(app.vent, 'on');
      this.ventTriggerSpy = this.sandbox.spy(app.vent, 'trigger');

      this.ajax = $.ajax({
        url: 'test'
      });

      this.settings = this.ajaxSpy.args[0];

    });

    describe('Events', function () {

      it('should trigger ajax:start request has started', function () {
        this.ajax.success(function () {
          expect(this.ventTriggerSpy.args[0][0]).to.eql('ajax:start');
        }, this);

      });

    });

  });

});
