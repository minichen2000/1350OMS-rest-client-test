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

        var logined=false;

        vm.otnIP='172.24.168.79';
        vm.otnPort=8443;
        vm.casIP='172.24.168.79';
        vm.casPort=8443;
        vm.casUrl='/cas/v1/tickets';
        vm.presentationIP='172.24.168.80';
        vm.guiUsername='alcatel';
        vm.guiPassword='Lucent1.!';
        vm.omsUrl='/oms1350/data/plat/session/login';
        vm.sessioninfo=false;

        vm.bodyType="json";
        vm.resultBodyType='';
        vm.reqJsonAccordionNotOn=false;
        vm.rspJsonAccordionNotOn=false;
        vm.reqXmlAccordionNotOn=false;
        vm.rspXmlAccordionNotOn=false;
        vm.notificationAccordionNotOn=false;
        vm.notificationCopied=false;

        vm.path=null;
        vm.postBody='';
        vm.postBodyNonJson='';
        vm.result='';
        vm.resultNonJson='';
        vm.postBodyOptions={mode: 'code'};
        vm.resultOptions={mode: 'code'};
        vm.notifications=[];
        vm.autoScroll=true;

        vm.onReqJsonEditorLoad = function (jsonEditor) {
            logger.debug("vm.onReqJsonEditorLoad");
            vm.reqJsonEditor=jsonEditor;
        };
        vm.onRspJsonEditorLoad = function (jsonEditor) {
            vm.rspJsonEditor=jsonEditor;
        };

        vm.interServerAddrBt=function(){
            var rlt= prompt("Internal Server:", commonUtil.internalBaseUrl.url);
            if(rlt!==null) {
                commonUtil.internalBaseUrl.url=rlt;
            }
        };

        /*
         vm.reqJsonAccordionNotOn=false;
         vm.rspJsonAccordionNotOn=false;
        */
        $scope.$watch(function(){return vm.reqJsonAccordionNotOn}, function(newValue, oldValue){
            if(newValue!=oldValue){
                $timeout(function(){
                    vm.reqJsonEditor && vm.reqJsonEditor.resize();
                }, 100);
            }
        });
        $scope.$watch(function(){return vm.rspJsonAccordionNotOn}, function(newValue, oldValue){
            if(newValue!=oldValue){
                $timeout(function(){
                    vm.rspJsonEditor && vm.rspJsonEditor.resize();
                }, 100);
            }
        });

        vm.aceLoaded = function(_editor) {
            // Options
            _editor.setFontSize(14);
            _editor.setShowPrintMargin(true);
        };
        vm.jsonString=function(data){
            return JSON.stringify(data, null, 2);
        };


        $timeout(function(){
            vm.channelsBody=JSON.stringify([
                '/event/notif/common',
                '/oms1350/events/otn/rest/alarmEvent',
                '/oms1350/events/npr/PhysicalConn',
                '/oms1350/events/otn/trail',
                '/oms1350/events/otn/path'
            ], null, 2);
        }, 1000);



        function genBaseUrl(){
            return 'https://'+vm.otnIP+':'+vm.otnPort+'/oms1350';
        }



        vm.onLogin=function(){
            vm.logining=true;
                $http({
                    method: 'post',
                    url: commonUtil.internalBaseUrl.url+'/login',
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
                        'sessioninfo': vm.sessioninfo,
                        'commetchannels': JSON.stringify(JSON.parse(vm.channelsBody))
                    }
                })
                .then(function(rsp){
                    logger.debug("rsp:"+JSON.stringify(rsp, null, 2));
                    //window.alert("OK");
                    logined=true;
                    checkStatus();
                    serverNotificationService.connect(commonUtil.generateWSUrl(), "5000");
                    serverNotificationService.addListener({ name: 'main', fun: listenerFun });

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
                url: commonUtil.internalBaseUrl.url+'/logout'
            })
                .then(function(rsp){
                    logger.debug("rsp:"+JSON.stringify(rsp, null, 2));
                    //window.alert("OK");
                    serverNotificationService.removeListener('main');
                    serverNotificationService.close();
                    logined=false;
                    vm.connected=false;
                    vm.logining=false;
                    vm.logouting=false;
                })
                .catch(function(rsp){
                    var error=JSON.stringify(rsp, null, 2);
                    logger.error("rsp:"+error);
                    //window.alert("Error:\n"+error);
                    vm.logouting=false;
                });
        };


        function checkStatus(){
            if(!logined) return;
            $http({
                method: 'post',
                url: commonUtil.internalBaseUrl.url+'/status'
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


        vm.postBodyModeSwith=function(){
            vm.postBodyOptions.mode=vm.postBodyOptions.mode=='code' ? 'tree' : 'code';
        };

        vm.resultModeSwith=function(){
            vm.resultOptions.mode=vm.resultOptions.mode=='code' ? 'tree' : 'code';
        };

        function genContentType(bodyType, body){
            if(bodyType=='json'){
                return 'application/json';
            }else{
                if(body && commonUtil.startsWith(body.trim(), '<')){
                    return 'application/xml';
                }else{
                    return 'text/html';
                }
            }
        }

        function onRequest(method){
            vm.requestProcessing=true;
            var url_=vm.baseUrl+vm.path;
            logger.debug("url:["+method+']: '+url_);
            $http({
                method: 'post',
                url: commonUtil.internalBaseUrl.url+'/op',
                transformResponse: undefined,
                params: {
                    'method': method,
                    'url': url_,
                    'contentType': genContentType(vm.bodyType, vm.postBodyNonJson)
                },
                data: vm.bodyType=='json' ? vm.postBody : vm.postBodyNonJson
            })
                .then(function(rsp){
                    //var rlt=JSON.stringify(rsp, null, 2);
                    var rspData=rsp.data;
                    logger.debug("rsp.data:"+rspData);
                    if(!commonUtil.startsWith(rspData.trim(), '{') && !commonUtil.startsWith(rspData.trim(), '[') && commonUtil.startsWith(rspData.trim(), '<')){
                        vm.resultNonJson=commonUtil.formatXml(rspData);
                        vm.resultBodyType='xml';
                    }else if(commonUtil.startsWith(rspData.trim(), '{') || commonUtil.startsWith(rspData.trim(), '[')){
                        vm.result=commonUtil.formatJson(rspData,' ');
                        vm.resultBodyType='json';
                    }else{
                        vm.result=rspData;
                        vm.resultBodyType='json';
                    }
                    vm.requestProcessing=false;
                })
                .catch(function(rsp){
                    var rlt=JSON.stringify(rsp, null, 2);
                    //logger.error("rsp:"+rlt);
                    vm.resultBodyType='json';
                    vm.result=rlt;
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

        vm.notificationAreaCopied=function(){
            vm.notificationCopied=true;
            $timeout(function(){
                vm.notificationCopied=false;
            }, 550);
        };

        vm.getNotificationAreaContent=function(){
            var rlt="";
            for(var i=0; i<vm.notifications.length;i++){
                rlt+=(vm.notifications[i].line1+'\n'+vm.notifications[i].line2+'\n\n');
            }
            return rlt;
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

    }
})();

