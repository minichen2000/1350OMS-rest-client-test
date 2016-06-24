(function () {
    'use strict';

    angular
        .module('starter')
        .directive('omsOtnRestForm', omsOtnRestForm);
    omsOtnRestForm.$inject = ['commonUtil', 'logger', '$http'];
    function omsOtnRestForm(commonUtil, logger, $http) {
        return {
            // can be used as attribute or element
            restrict: 'AE',
            scope: {
                formOtnProtocal: '=',
                formOtnIp: '=',
                formOtnPort: '=',
                formOmsUrlPrefix: '='
            },
            // which markup this directive generates
            templateUrl: 'js/directives/oms-otn-rest-form.html',
            replace: true,
            link: function (scope, iElement, iAttrs) {
                scope.baseUrl=scope.formOtnProtocal+'://'+scope.formOtnIp+':'+scope.formOtnPort+scope.formOmsUrlPrefix;
                scope.path=null;
                scope.result=null;

                var _data={"Tag":"CMD_WIZTYPE_createConn","userLabel":"cmm_1","tecnologyDomain":"OTN","connectionType":"chooserConnWdm","WDMconnectionIwType":"Technology_wdm","WDMconnectionType":"WdmPortType_ots","constAllocation":"20","ultraLongSpan":"Boolean_false","aNode":"NE4","aNode_id":24,"aNode_guiLabel":"NE4","aNode_emlNeType":"1830PSS-PHN","aNode_productName":"1830PSS","aPort":"NE4/ITL-29-1-SIG","aPort_ObjectId":null,"aPort_EventType":null,"aPort_ClassType":null,"aPort_IdClass":4,"aPort_alarmStatus":"AlarmStatus_cleared","aPort_boardType":"MUX%LINE","aPort_cardType":"ITLB","aPort_clonePortPresent":"Boolean_false","aPort_compModule":null,"aPort_consistSt":"ConsistencyStatus_normal","aPort_currentFrequency":null,"aPort_direction":"Direction_bidirectional","aPort_displayLabel":"ITL-29-1-SIG","aPort_encoding":"Encoding_notMeaningful","aPort_ethInterfaceRate":"EthInterfaceRate_notMeaningful","aPort_ethInterfaceType":"EthInterType_notApplicable","aPort_fdnMapper":"NC_n=*EML_100_SNA/NE_n=*10/PTPn=*ITL-29-1-SIG/:PORT","aPort_fecType":"FecType_notMeaningful","aPort_frequency":"##","aPort_internalEmlAid":"29/1/1","aPort_involvedIn3R":"Boolean_false","aPort_involvedOnInternalCable":"Boolean_false","aPort_involvedOnPhyConn":"Boolean_false","aPort_neId":23,"aPort_neLabel":"NE4","aPort_networkInterfaceType":"NetworkInterfaceType_notMeaningful","aPort_operationalState":"OperationalState_enabled","aPort_otuSignalType":"OtuSignalType_notMeaningful","aPort_physicalPortType":"PortType_notMeaningful","aPort_portBitRate":null,"aPort_id":7872,"aPort_key":"Port/7872","aPort_className":"Port","aPort_technology":"Technology_wdm","aPort_uploadSt":"UploadStatus_normal","aPort_usedDir":"Direction_bidirectional","aPort_usedOnOtn":"Boolean_false","aPort_guiLabel":"NE4/ITL-29-1-SIG","aPort_wdmClientSignalType":"ClientSignalType_notMeaningful","aPort_wdmInterfaceType":"WdmInterfaceType_blackAndWhite","aPort_wdmPhysicalPortRate":null,"aPort_wdmPortType":"WdmPortType_ots","aPort_wdmTransmissionMode":"WdmTransMode_notMeaningful","aPort_width":null,"zNode":"NE1","zNode_id":45,"zNode_guiLabel":"NE1","zNode_emlNeType":"1830PSS-PHN","zNode_productName":"1830PSS","zPort":"NE1/ITL-31-1-SIG","zPort_ObjectId":null,"zPort_EventType":null,"zPort_ClassType":null,"zPort_IdClass":4,"zPort_alarmStatus":"AlarmStatus_cleared","zPort_boardType":"MUX%LINE","zPort_cardType":"ITLB","zPort_clonePortPresent":"Boolean_false","zPort_compModule":null,"zPort_consistSt":"ConsistencyStatus_normal","zPort_currentFrequency":null,"zPort_direction":"Direction_bidirectional","zPort_displayLabel":"ITL-31-1-SIG","zPort_encoding":"Encoding_notMeaningful","zPort_ethInterfaceRate":"EthInterfaceRate_notMeaningful","zPort_ethInterfaceType":"EthInterType_notApplicable","zPort_fdnMapper":"NC_n=*EML_100_SNA/NE_n=*31/PTPn=*ITL-31-1-SIG/:PORT","zPort_fecType":"FecType_notMeaningful","zPort_frequency":"##","zPort_internalEmlAid":"31/1/1","zPort_involvedIn3R":"Boolean_false","zPort_involvedOnInternalCable":"Boolean_false","zPort_involvedOnPhyConn":"Boolean_false","zPort_neId":44,"zPort_neLabel":"NE1","zPort_networkInterfaceType":"NetworkInterfaceType_notMeaningful","zPort_operationalState":"OperationalState_enabled","zPort_otuSignalType":"OtuSignalType_notMeaningful","zPort_physicalPortType":"PortType_notMeaningful","zPort_portBitRate":null,"zPort_id":8349,"zPort_key":"Port/8349","zPort_className":"Port","zPort_technology":"Technology_wdm","zPort_uploadSt":"UploadStatus_normal","zPort_usedDir":"Direction_bidirectional","zPort_usedOnOtn":"Boolean_false","zPort_guiLabel":"NE1/ITL-31-1-SIG","zPort_wdmClientSignalType":"ClientSignalType_notMeaningful","zPort_wdmInterfaceType":"WdmInterfaceType_blackAndWhite","zPort_wdmPhysicalPortRate":null,"zPort_wdmPortType":"WdmPortType_ots","zPort_wdmTransmissionMode":"WdmTransMode_notMeaningful","zPort_width":null};

                function onRequest(method){
                    var url_=scope.baseUrl+scope.path;
                    logger.debug("url:["+method+']: '+url_);
                    $http({
                        method: 'post',
                        url: './op',
                        params: {
                            'method': method,
                            'url': url_,
                            'contentType': 'application/json'
                        },
                        data: JSON.stringify(_data)
                    })
                        .then(function(rsp){
                            var rlt=JSON.stringify(rsp, null, 2);
                            logger.debug("rsp:"+rlt);
                            scope.result=rsp.data;
                        })
                        .catch(function(rsp){
                            var rlt=JSON.stringify(rsp, null, 2);
                            logger.error("rsp:"+rlt);
                            scope.result=rsp;
                        });
                }
                scope.onGet=function(){
                    onRequest('get');
                }
                scope.onPost=function(){
                    onRequest('post');
                }
                scope.onDelete=function(){
                    onRequest('delete');
                }
            }
        };
    };
})();
