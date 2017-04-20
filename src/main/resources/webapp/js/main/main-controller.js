/**
 * Created by Chen on 2016/4/20.
 */
(function () {
    'use strict';

    angular
        .module('starter')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', '$scope', 'commonUtil', 'logger', '$interval', '$timeout', 'serverNotificationService'];
    function MainController($http, $scope, commonUtil, logger, $interval, $timeout, serverNotificationService) {
        var vm = this;
        vm.requestProcessing=false;
        vm.logining=false;
        vm.logouting=false;
        vm.connected=false;

        vm.otnIP='172.24.168.79';
        vm.otnPort=8443;
        vm.casIP='172.24.168.79';
        vm.casPort=8443;
        vm.casUrl='/cas/v1/tickets';
        vm.presentationIP='172.24.168.80';
        vm.guiUsername='alcatel';
        vm.guiPassword='Lucent1.!';
        vm.omsUrl='/oms1350/data/plat/session/login';

        $timeout(function(){
            vm.channelsBody=[
                '/event/notif/common',
                '/oms1350/events/otn/rest/alarmEvent',
                '/oms1350/events/npr/PhysicalConn',
                '/oms1350/events/otn/trail',
                '/oms1350/events/otn/path'
            ];
        }, 1000);

        vm.notifications=[];
        vm.autoScroll=true;
        vm.onLoad = function (instance) {
            //instance.expandAll();
        };

        function genBaseUrl(){
            return 'https://'+vm.otnIP+':'+vm.otnPort+'/oms1350';
        }

        vm.path=null;
        vm.result=null;
        vm.postBody=null;
        vm.postBodyNonJson=null;
        vm.postBodyOptions={mode: 'code'};
        vm.resultOptions={mode: 'code'};

        vm.onLogin=function(){
            vm.logining=true;
                $http({
                    method: 'post',
                    url: commonUtil.internalBaseUrl+'/login',
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
                        'omsurl': vm.omsUrl,
                        'commetchannels': JSON.stringify(vm.channelsBody)
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
        };

        vm.onLogout=function(){
            vm.logouting=true;
            $http({
                method: 'post',
                url: commonUtil.internalBaseUrl+'/logout'
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
        };


        function checkStatus(){
            $http({
                method: 'post',
                url: commonUtil.internalBaseUrl+'/status'
            })
                .then(function(rsp){
                    //logger.debug("rsp:"+JSON.stringify(rsp, null, 2));
                    if(rsp.data.status.toLowerCase()=='connected'){
                        vm.baseUrl=genBaseUrl();
                        vm.connected=true;
                        vm.logining=false;
                    }else{
                        vm.connected=false;
                        vm.logouting=false;
                    }

                    $timeout(checkStatus, 1000);
                })
                .catch(function(rsp){
                    var error=JSON.stringify(rsp, null, 2);
                    //logger.error("rsp:"+error);
                    $timeout(checkStatus, 1000);
                });
        }


        checkStatus();






        vm.postBodyModeSwith=function(){
            vm.postBodyOptions.mode=vm.postBodyOptions.mode=='code' ? 'tree' : 'code';
        };

        vm.resultModeSwith=function(){
            vm.resultOptions.mode=vm.resultOptions.mode=='code' ? 'tree' : 'code';
        };

        function genContentType(body){
            if(!body) return 'text/html';
            if(body.trim().startsWith('<')){
                return 'application/xml';
            }else if(body.trim().startsWith('{') || body.trim().startsWith('[')){
                return 'application/json';
            }else{
                return 'text/html';
            }
        }

        function onRequest(method){
            vm.requestProcessing=true;
            var url_=vm.baseUrl+vm.path;
            logger.debug("url:["+method+']: '+url_);
            $http({
                method: 'post',
                url: commonUtil.internalBaseUrl+'/op',
                transformResponse: undefined,
                params: {
                    'method': method,
                    'url': url_,
                    'contentType': genContentType(vm.postBodyNonJson ? vm.postBodyNonJson : JSON.stringify(vm.postBody))
                },
                data: vm.postBodyNonJson ? vm.postBodyNonJson : JSON.stringify(vm.postBody ? vm.postBody : "")
            })
                .then(function(rsp){
                    var rlt=JSON.stringify(rsp, null, 2);
                    logger.debug("rsp:"+rsp);
                    var ss=rsp.data;
                    if(!ss.startsWith('{') && !ss.startsWith('[') && ss.startsWith('<')){
                        vm.resultNonJson=rsp.data;
                    }else{
                        vm.result=JSON.parse(rsp.data);
                    }
                    vm.requestProcessing=false;
                })
                .catch(function(rsp){
                    var rlt=JSON.stringify(rsp, null, 2);
                    //logger.error("rsp:"+rlt);
                    vm.result=rsp;
                    vm.requestProcessing=false;
                });
        }
        vm.onGet=function(){
            onRequest('get');
        };
        vm.onPost=function(){
            onRequest('post');
        };
        vm.onPut=function(){
            onRequest('put');
        };
        vm.onDelete=function(){
            onRequest('delete');
        };

        vm.clearNotifications=function(){
            vm.notifications.length=0;
        };

        function tryToAutoScroll(){
            if(vm.autoScroll){
                setTimeout(function(){
                    document.getElementById("notifArea").scrollTop = document.getElementById("notifArea").scrollHeight;
                }, 20);
            }
        }
        vm.swithAutoScroll=function(){
            vm.autoScroll=!vm.autoScroll;
            tryToAutoScroll();
        };




        var listenerFun = function(evtData) {
            $scope.$apply(function() {

                evtData=JSON.parse(evtData);
                logger.debug("notification msg:\n"+JSON.stringify(evtData, null,2));
                vm.notifications.push({
                    line1: '['+(new Date()).toString()+']',
                    line2: JSON.stringify(evtData, null,2)
                });
            });
            tryToAutoScroll();

        };

        serverNotificationService.connect(commonUtil.generateWSUrl(), "5000");
        
        serverNotificationService.addListener({ name: 'main', fun: listenerFun });
    }
})();

