(function () {
    'use strict';

    angular
        .module('doc')
        .directive('tabContent', tabContent);
    tabContent.$inject = [];
    function tabContent() {
        return {
            // can be used as attribute or element
            restrict: 'AE',
            scope: {
                groupData: '='
            },
            // which markup this directive generates
            templateUrl: 'js/directives/tab-content.html',
            replace: true,
            link: function (scope, iElement, iAttrs) {
                scope.jsonString=function(data){
                    return JSON.stringify(data, null, 2);
                }
            }
        };
    };
})();
