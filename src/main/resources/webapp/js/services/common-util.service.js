(function () {
  'use strict';

  angular
    .module('starter')
    .factory('commonUtil', commonUtil);

  commonUtil.$inject = ['logger', '$q', '$timeout', '$interval', '$location'];


  function commonUtil(logger, $q, $timeout, $interval, $location) {

    var internalBaseUrl="";
    //var internalBaseUrl="http://localhost:8080";
    var service = {
      internalBaseUrl: internalBaseUrl,
      generateWSUrl: generateWSUrl
    };
    return service;

    function generateWSUrl() {
      if(internalBaseUrl && internalBaseUrl.length>0){
        return "ws"+internalBaseUrl.slice(internalBaseUrl.indexOf(':'))+ "/notification";
      }
      var absUrl = $location.absUrl();
      //logger.log("$location.absUrl()=" + absUrl);
      //logger.log("$location.url()=" + $location.url());
      var rlt = absUrl.slice(absUrl.indexOf(':'), absUrl.lastIndexOf($location.url()));
      rlt=rlt.replace(/\/#/g, '');
      if(rlt.lastIndexOf('/')==rlt.length-1){
        rlt=rlt.substring(0, rlt.length-1);
      }
      return "ws" + rlt + "/notification";
    }
  }


})();
