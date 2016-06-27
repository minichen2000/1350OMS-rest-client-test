(function () {
  'use strict';

  angular
    .module('starter')
    .factory('commonUtil', commonUtil);

  commonUtil.$inject = ['logger', '$q', '$timeout', '$interval', '$location'];


  function commonUtil(logger, $q, $timeout, $interval, $location) {

    var service = {
      generateWSUrl: generateWSUrl
    };
    return service;

    function generateWSUrl() {
      var absUrl = $location.absUrl();
      logger.log("$location.absUrl()=" + absUrl);
      logger.log("$location.url()=" + $location.url());
      var rlt = absUrl.slice(absUrl.indexOf(':'), absUrl.lastIndexOf($location.url()));
      return "ws" + rlt.replace(/\/#/g, '') + "/notification";
    }
  }


})();
