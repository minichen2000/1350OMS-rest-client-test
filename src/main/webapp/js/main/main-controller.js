/**
 * Created by Chen on 2016/4/20.
 */
(function () {
    'use strict';

    angular
        .module('starter')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', '$scope', 'commonUtil', 'logger', '$interval', '$timeout'];
    function MainController($http, $scope, commonUtil, logger, $interval, $timeout) {
        var vm = this;
        vm.connected=false;

        vm.otnIP='135.251.96.33';
        vm.otnPort=8443;
        vm.casIP='135.251.96.33';
        vm.casPort=8443;
        vm.casUrl='/cas/v1/tickets';
        vm.presentationIP='135.251.96.34';
        vm.guiUsername='alcatel';
        vm.guiPassword='Lucent2.@';
        vm.omsUrl='/oms1350/data/plat/session/login';

        vm.result={result: '', resultOptions: {mode: 'code'}};
        vm.onLoad = function (instance) {
            instance.expandAll();
        };

        vm.onLogin=function(){
                $http({
                    method: 'post',
                    url: './login',
                    //url:'http://www.mobisoftwarestudio.com',
                    //url:'https://api.shanbay.com/bdc/search/',
                    //url:'http://127.0.0.1:8080/',
                    //headers:{'Content-Type': 'application/json, text/plain, */*', 'Access-Control-Allow-Origin':'*'},
                    params: {
                        'otnip': vm.otnIP,
                        'otnport': vm.otnPort,
                        'casip': vm.casIP,
                        'casport': vm.casPort,
                        'casurl': vm.casUrl,
                        'presentationip': vm.presentationIP,
                        'guiusername': vm.guiUsername,
                        'guipassword': vm.guiPassword,
                        'omsurl': vm.omsUrl
                    }
                })
                .then(function(rsp){
                    logger.debug("rsp:"+JSON.stringify(rsp, null, 2));
                    //window.alert("OK");
                })
                .catch(function(rsp){
                    var error=JSON.stringify(rsp, null, 2);
                    logger.error("rsp:"+error);
                    //window.alert("Error:\n"+error);
                });
        }

        vm.onLogout=function(){
            $http({
                method: 'post',
                url: './logout'
            })
                .then(function(rsp){
                    logger.debug("rsp:"+JSON.stringify(rsp, null, 2));
                    //window.alert("OK");
                })
                .catch(function(rsp){
                    var error=JSON.stringify(rsp, null, 2);
                    logger.error("rsp:"+error);
                    //window.alert("Error:\n"+error);
                });
        }


        function checkStatus(){
            $http({
                method: 'post',
                url: './status'
            })
                .then(function(rsp){
                    logger.debug("rsp:"+JSON.stringify(rsp, null, 2));
                    if(rsp.data.status.toLowerCase()=='connected'){
                        vm.connected=true;
                    }else{
                        vm.connected=false;
                    }

                    $timeout(checkStatus, 1000);
                })
                .catch(function(rsp){
                    var error=JSON.stringify(rsp, null, 2);
                    logger.error("rsp:"+error);
                    $timeout(checkStatus, 1000);
                });
        }


        checkStatus();




        vm.baseUrl='https://'+vm.otnIP+':'+vm.otnPort+'/oms1350';
        vm.path=null;
        vm.result="";
        vm.postBody="";
        vm.postBodyOptions={mode: 'code'};
        vm.resultOptions={mode: 'code'};

        vm.postBodyModeSwith=function(){
            vm.postBodyOptions.mode=vm.postBodyOptions.mode=='code' ? 'tree' : 'code';
        }

        vm.resultModeSwith=function(){
            vm.resultOptions.mode=vm.resultOptions.mode=='code' ? 'tree' : 'code';
        }

        function onRequest(method){
            var url_=vm.baseUrl+vm.path;
            logger.debug("url:["+method+']: '+url_);
            $http({
                method: 'post',
                url: './op',
                params: {
                    'method': method,
                    'url': url_,
                    'contentType': 'application/json'
                },
                data: JSON.stringify(vm.postBody ? vm.postBody : "")
            })
                .then(function(rsp){
                    var rlt=JSON.stringify(rsp, null, 2);
                    logger.debug("rsp:"+rlt);
                    vm.result=rsp.data;
                })
                .catch(function(rsp){
                    var rlt=JSON.stringify(rsp, null, 2);
                    logger.error("rsp:"+rlt);
                    vm.result=rsp;
                });
        }
        vm.onGet=function(){
            onRequest('get');
        }
        vm.onPost=function(){
            onRequest('post');
        }
        vm.onDelete=function(){
            onRequest('delete');
        }
    }
})();

