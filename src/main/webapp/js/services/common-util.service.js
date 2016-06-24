(function () {
  'use strict';

  angular
    .module('starter')
    .factory('commonUtil', commonUtil);

  commonUtil.$inject = ['logger', '$q', '$timeout', '$interval'];


  function commonUtil(logger, $q, $timeout, $interval) {

    var service = {

    };
    return service;
  }


})();
