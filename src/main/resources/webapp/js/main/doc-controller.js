/**
 * Created by Chen on 2016/4/20.
 */
(function () {
    'use strict';

    angular
        .module('doc')
        .controller('DocController', DocController);

    DocController.$inject = ['$scope'];
    function DocController($scope) {

        var vm=this;
        vm.groups=OmsRESTfulCMDs;
        /*vm.nodeGroupData=OmsRESTfulCMDs[0];
        vm.portGroupData=OmsRESTfulCMDs[1];
        vm.tlGroupData=OmsRESTfulCMDs[2];
        vm.trailGroupData=OmsRESTfulCMDs[3];
        vm.pathGroupData=OmsRESTfulCMDs[4];*/

    }
})();

