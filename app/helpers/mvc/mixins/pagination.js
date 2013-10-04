//
// ## helpers.mvc.mixins.pagination
//

define(function () {

  'use strict';

  var paginationMixin = {

    initialize: function (options) {
      _.bindAll(this, '_updatePagination', '_updateModels', 'pageInfo', 'nextPage', 'previousPage');

      this.options = options || {};

      this.page = options.page || 1;
      this.perPage = options.perPage || 12;
    },

    resetPagination: function () {
      this.page = 1;

      if (!this.total) {
        this.page = 0;
      }

      this._updateModels();
    },

    pageInfo: function () {
      var info = {
        total: this.total,
        page: this.page,
        perPage: this.perPage,
        pages: Math.ceil(this.total / this.perPage),
        prev: false,
        next: false
      };

      var max = Math.min(this.total, this.page * this.perPage);

      if (this.total === this.pages * this.perPage) {
        max = this.total;
      }

      info.range = [(this.page - 1) * this.perPage + 1, max];

      if (this.page > 1) {
        info.prev = this.page - 1;
      }

      if (this.page < info.pages) {
        info.next = this.page + 1;
      }

      return info;
    },

    _updatePagination: function () {
      var data = {
        currentPage: this.page,
        pages: this.pageInfo().pages
      };

      this.pagination.set(data);
    },

    nextPage: function () {

      if (!this.pageInfo().next) {
        return false;
      }

      this.page = this.page + 1;
      this._updateModels();
    },

    previousPage: function () {

      if (!this.pageInfo().prev) {
        return false;
      }

      this.page = this.page - 1;
      this._updateModels();
    },

    _updateModels: function () {
      var start = (this.page - 1) * this.perPage;
      var end = start + this.perPage;

      this.reset(this.allModels.slice(start, end));
      this._updatePagination();
    }

  };

  return paginationMixin;

});
