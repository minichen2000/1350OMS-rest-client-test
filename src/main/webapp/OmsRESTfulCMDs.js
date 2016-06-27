OmsRESTfulCMDs = [
    {
        "groupTitle": "Node",
        "cmds": [
            {
                "title": "List all Nodes",
                "method": "GET",
                "path": "/data/npr/nodes"
            },
            {
                "title": "Get one Node",
                "method": "GET",
                "path": "/data/npr/nodes/{id}",
                "path_example": "/data/npr/nodes/24"
            }
        ]
    },
    {
        "groupTitle": "Port",
        "cmds": [
            {
                "title": "List all Port on NE",
                "method": "GET",
                "path": "/data/npr/Port?neId={id}",
                "path_example": "/data/npr/Port?neId=24"
            },
            {
                "title": "Get one Port",
                "method": "GET",
                "path": "/data/npr/Port/{id}",
                "path_example": "/data/npr/Port/2685"
            }
        ]
    },
    {
        "groupTitle": "TopologicalLink",
        "cmds": [
            {
                "title": "List all TLs",
                "method": "GET",
                "path": "/data/npr/physicalConns"
            },
            {
                "title": "Get one TL",
                "method": "GET",
                "path": "/data/npr/physicalConns/{connectId}",
                "path_example": "/data/npr/physicalConns/44"
            },
            {
                "title": "Create TL (2 Ends)",
                "method": "POST",
                "path": "/data/npr/physicalConns",
                "postBody": {
                    "Tag": "CMD_WIZTYPE_createConn",
                    "userLabel": "cmm_2",
                    "connectionType": "chooserConnWdm",
                    "aNode": "NE4",
                    "aPort": "NE4/ITL-29-1-SIG",
                    "aPort_id": 7872,
                    "zNode": "NE1",
                    "zPort": "NE1/ITL-31-1-SIG",
                    "zPort_id": 8349
                },
                "postBody_example": {
                    "Tag": "CMD_WIZTYPE_createConn",
                    "userLabel": "cmm_2",
                    "connectionType": "chooserConnWdm",
                    "aNode": "NE4",
                    "aPort": "NE4/ITL-29-1-SIG",
                    "aPort_id": 7872,
                    "zNode": "NE1",
                    "zPort": "NE1/ITL-31-1-SIG",
                    "zPort_id": 8349
                }
            },
            {
                "title": "Create TL (4 Ends)",
                "method": "POST",
                "path": "/data/npr/physicalConns",
                "postBody": {
                    "Tag": "CMD_WIZTYPE_createConn",
                    "userLabel": "cmm_4",
                    "connectionType": "chooserConnWdm4EndedNew",
                    "aNode": "NE5",
                    "aPort": "NE5/AM2125B-2-17-LINEOUT",
                    "aPort_id": 7172,
                    "a2Port": "NE5/AM2125B-2-17-LINEIN",
                    "a2Port_id": 7173,
                    "zNode": "NE6",
                    "zPort": "NE6/AM2125B-2-17-LINEIN",
                    "zPort_id": 8349,
                    "z2Port": "NE6/AM2125B-2-17-LINEOUT",
                    "z2Port_id": 8350
                },
                "postBody_example": {
                    "Tag": "CMD_WIZTYPE_createConn",
                    "userLabel": "cmm_4",
                    "connectionType": "chooserConnWdm4EndedNew",
                    "aNode": "NE5",
                    "aPort": "NE5/AM2125B-2-17-LINEOUT",
                    "aPort_id": 7172,
                    "a2Port": "NE5/AM2125B-2-17-LINEIN",
                    "a2Port_id": 7173,
                    "zNode": "NE6",
                    "zPort": "NE6/AM2125B-2-17-LINEIN",
                    "zPort_id": 8349,
                    "z2Port": "NE6/AM2125B-2-17-LINEOUT",
                    "z2Port_id": 8350
                }
            },
            {
                "title": "Delete TL",
                "method": "DELETE",
                "path": "/data/npr/physicalConns/{connectId}",
                "path_example": "/data/npr/physicalConns/44"
            }
        ]
    },
    {
        "groupTitle": "Trail",
        "cmds": [
            {
                "title": "List all trails",
                "method": "GET",
                "path": "/data/otn/connections/trails"
            },
            {
                "title": "Get one trail",
                "method": "GET",
                "path": "/data/otn/connections/trails/{id}",
                "path_example": "/data/otn/connections/trails/44"
            },
            {
                "title": "Create Trail (Unprotected)",
                "method": "POST",
                "path": "/data/otn/Connection",
                "postBody_fixed_part": {
                    "ASONRouted": "false",
                    "preferredRestorationMode": "norestore",
                    "reversionMode": "manual",
                    "waitForServerRestoration": "false",
                    "protectiontype": "9",
                    "networkProtectionMode": "0",
                    "clientprotectiontype": "0",
                    "switchType": "0",
                    "revertive": "2",
                    "reversionTimer": "N/A",
                    "alarmEnable": "NOTSET",
                    "autoInService": "Disable",
                    "AutoInServiceTimer": "Default",
                    "pm15min": "false",
                    "pm24hr": "true",
                    "LOSPropagation": "UseNEValue",
                    "xmnActualBitRate": "Default",
                    "serviceratetype": "Trail",
                    "signalType": "Default",
                    "connshape": "8",
                    "lopc": "false",
                    "fecMode": "Default",
                    "wavekeyConfig": "Auto",
                    "routing": "1",
                    "autoprovision": "true",
                    "integratedprovision": "false",
                    "orderstep": "9",
                    "allowUncommissioned": "true",
                    "provisionwavekey": "keyed",
                    "cirrate": "0",
                    "cbs": "CBS16",
                    "ebs": "CBS16",
                    "aendworkport": "porta",
                    "fec": "Use NE Value",
                    "MRNTunnel": "false",
                    "ASONConnectionType": "TermTunnel",
                    "fromaside": "working",
                    "toaside": "working",
                    "ycableswitchmode": "uni",
                    "ycablerevertivemode": "Disabled",
                    "ycablerestoretime": "5",
                    "ycabletimeslot": "1",
                    "odukTraceMismatchAction": "UseNevalue",
                    "odukTraceMismatchDectMode": "UseNevalue",
                    "ProvisionedBitRate": "UseNEValue",
                    "ProvisionedBitRateDsr": "UseNEValue",
                    "fecEnable": "UseNEValue",
                    "asymInterwk": "UseNEValue",
                    "Odu4InterworkingMode": "UseNEValue",
                    "encryptionState": "UseNEValue",
                    "encryptionSwitchOverToNextKey": "UseNEValue",
                    "PayloadTypeMismatchResponse": "UseNEValue",
                    "mappingmode": "UseNEValue",
                    "EncapsulationMode": "UseNEValue",
                    "apsEnable": "UseNEValue",
                    "ssmSupport": "UseNEValue",
                    "outQl": "UseNEValue",
                    "clientholdofftime": "0",
                    "clientprotectedMethod": "0",
                    "clientprotectingMethod": "0",
                    "clientsignaldegrade": "0",
                    "clientwaittime": "5",
                    "clientrevertivemode": "1",
                    "nwkprotectiontype": "0",
                    "nwkholdofftime": "0",
                    "nwkprotectedMethod": "0",
                    "nwkprotectingMethod": "0",
                    "nwksignaldegrade": "0",
                    "nwkwaittime": "5",
                    "nwkrevertivemode": "1",
                    "asonsubntwkprttype": "SNCP",
                    "routingeffort": "2",
                    "ignorealarm4route": "false",
                    "sysAssignFreq": "true",
                    "usecwdmfreq": "false",
                    "reinstate": "none",
                    "rearrange": "soft",
                    "ordersensitive": "false",
                    "tpmonitor15": "2",
                    "direction15": "0",
                    "reportinfo15": "1",
                    "pmdata15": "0",
                    "tpmonitor24": "2",
                    "direction24": "0",
                    "reportinfo24": "0",
                    "pmdata24": "0",
                    "wavekeytype": "auto",
                    "wavekeyassignment": "system",
                    "azwavekeypref": "none",
                    "zawavekeypref": "none",
                    "azwavekeyrekey": "NORekey",
                    "zawavekeyrekey": "NORekey",
                    "tcmLevel": "notcm",
                    "hasycable1": "no",
                    "txParamData": [
                        {
                            "parameter": "TTIMismatchConsequentAction",
                            "name": "CAonTIM",
                            "currentValue": "Use NE Value",
                            "type": "Enumeration",
                            "editorArgs": {
                                "options": [
                                    "Use NE Value",
                                    "Enable",
                                    "Disable"
                                ],
                                "maxlength": 0
                            }
                        },
                        {
                            "parameter": "PayloadTypeResp",
                            "name": "PayloadTypeMismatchResponse",
                            "currentValue": "Use NE Value",
                            "type": "Enumeration",
                            "editorArgs": {
                                "options": [
                                    "Use NE Value",
                                    "Enable",
                                    "Disable"
                                ],
                                "maxlength": 0
                            }
                        },
                        {
                            "parameter": "Payloadtype",
                            "name": "payloadType",
                            "currentValue": "Use NE Value",
                            "type": "String",
                            "editorArgs": null
                        },
                        {
                            "parameter": "SourceAZTTI",
                            "name": "TrailTraceActualTx",
                            "currentValue": "Use NE Value",
                            "type": "String",
                            "editorArgs": {
                                "options": null,
                                "maxlength": 15
                            }
                        },
                        {
                            "parameter": "SourceZATTI",
                            "name": "TrailTraceExpectedRx",
                            "currentValue": "Use NE Value",
                            "type": "String",
                            "editorArgs": {
                                "options": null,
                                "maxlength": 15
                            }
                        },
                        {
                            "parameter": "TTIMonitor",
                            "name": "TrailTraceMonitor",
                            "currentValue": "Use NE Value",
                            "type": "Enumeration",
                            "editorArgs": {
                                "options": [
                                    "Use NE Value",
                                    "Source Enabled",
                                    "Disabled"
                                ],
                                "maxlength": 0
                            }
                        },
                        {
                            "parameter": "TraceMismatchMonitor",
                            "name": "TrailTraceEnablePoints",
                            "currentValue": "Enable End-points only",
                            "type": "Enumeration",
                            "editorArgs": {
                                "options": [
                                    "Enable End-points only",
                                    "Enable All",
                                    "Use NE Value"
                                ],
                                "maxlength": 0
                            }
                        },
                        {
                            "parameter": "OTUkSourceAZTTI",
                            "name": "TrailTraceActualTx",
                            "currentValue": "Use NE Value",
                            "type": "String",
                            "editorArgs": {
                                "options": null,
                                "maxlength": 15
                            }
                        },
                        {
                            "parameter": "OTUkSourceZATTI",
                            "name": "TrailTraceExpectedRx",
                            "currentValue": "Use NE Value",
                            "type": "String",
                            "editorArgs": {
                                "options": null,
                                "maxlength": 15
                            }
                        },
                        {
                            "parameter": "TTIMonitor",
                            "name": "TrailTraceMonitor",
                            "currentValue": "Use NE Value",
                            "type": "Enumeration",
                            "editorArgs": {
                                "options": [
                                    "Use NE Value",
                                    "Source Enabled",
                                    "Disabled"
                                ],
                                "maxlength": 0
                            }
                        },
                        {
                            "parameter": "OTUkTTIMismatchConsequentAction",
                            "name": "CAonTIM",
                            "currentValue": "Use NE Value",
                            "type": "Enumeration",
                            "editorArgs": {
                                "options": [
                                    "Use NE Value",
                                    "Enable",
                                    "Disable"
                                ],
                                "maxlength": 0
                            }
                        },
                        {
                            "parameter": "ProvisionedBitRate",
                            "name": "ProvisionedBitRate",
                            "currentValue": "Use NE Value",
                            "type": "Enumeration",
                            "editorArgs": {
                                "options": [
                                    "Use NE Value",
                                    "11.049",
                                    "11.096"
                                ],
                                "maxlength": 0
                            }
                        }
                    ],
                    "eirrate": "0",
                    "payloadType": "UseNEValue",
                    "ycablefromne": "NE1",
                    "hasopsb": "no",
                    "hasycable": "no",
                    "hassdx": "no",
                    "ycabletone": "NE4",
                    "operation": "create",
                    "otnRoutingConstraints": [],
                    "defaultpriority": "4",
                    "defaultsetuppriority": "5",
                    "customerName": ""
                },
                "postBody_customized_part_examples": [
                    {
                        "title": "OTU2e",
                        "content": {
                            "connectionname": "cm_otu2e_1",
                            "trailrate": "OTU2E",
                            "routedisplay": "false",
                            "fromporttype1": "UnTerminated",
                            "toporttype1": "UnTerminated",
                            "fromporttype2": "UnTerminated",
                            "toporttype2": "UnTerminated",
                            "fromne1": "NE1",
                            "fromne1_AdditionalInfo": {
                                "type": "NODE",
                                "name": "NE1",
                                "id": 45,
                                "productName": "1830PSS"
                            },
                            "fromport1": "11OPE8-2-10-X2",
                            "fromport1_AdditionalInfo": {
                                "neId": 49,
                                "neName": "NE1",
                                "portName": "11OPE8-2-10-X2",
                                "label": "11OPE8-2-10-X2",
                                "portid": 165479,
                                "cardName": "11OPE8",
                                "portGrpMode": "N/A",
                                "odukrate": "OTU2E"
                            },
                            "tone1": "NE4",
                            "tone1_AdditionalInfo": {
                                "type": "NODE",
                                "name": "NE4",
                                "id": 24,
                                "productName": "1830PSS"
                            },
                            "toport1": "11OPE8-2-10-X1",
                            "toport1_AdditionalInfo": {
                                "neId": 27,
                                "neName": "NE4",
                                "portName": "11OPE8-2-10-X1",
                                "label": "11OPE8-2-10-X1",
                                "portid": 165112,
                                "cardName": "11OPE8",
                                "portGrpMode": "N/A",
                                "odukrate": "OTU2E"
                            },
                            "fromport2": "",
                            "toport2": ""
                        }
                    },
                    {
                        "title": "ODU2e",
                        "content": {
                            "connectionname": "cm_odu2e_1",
                            "trailrate": "ODU2E",
                            "routedisplay": "true",
                            "fromporttype1": "Terminated",
                            "toporttype1": "Terminated",
                            "fromporttype2": "Terminated",
                            "toporttype2": "Terminated",
                            "fromne1": "NE1",
                            "fromne1_AdditionalInfo": {
                                "type": "NODE",
                                "name": "NE1",
                                "id": 45,
                                "productName": "1830PSS"
                            },
                            "fromport1": "11OPE8-2-10-X2-1",
                            "fromport1_AdditionalInfo": {
                                "neId": 49,
                                "neName": "NE1",
                                "portName": "11OPE8-2-10-X2-1",
                                "label": "11OPE8-2-10-X2-1",
                                "portid": 165480,
                                "cardName": "11OPE8",
                                "portGrpMode": "N/A",
                                "odukrate": "ODU2E"
                            },
                            "tone1": "NE4",
                            "tone1_AdditionalInfo": {
                                "type": "NODE",
                                "name": "NE4",
                                "id": 24,
                                "productName": "1830PSS"
                            },
                            "toport1": "11OPE8-2-10-X1-1",
                            "toport1_AdditionalInfo": {
                                "neId": 27,
                                "neName": "NE4",
                                "portName": "11OPE8-2-10-X1-1",
                                "label": "11OPE8-2-10-X1-1",
                                "portid": 165113,
                                "cardName": "11OPE8",
                                "portGrpMode": "N/A",
                                "odukrate": "ODU2E"
                            },
                            "fromport2": "",
                            "toport2": ""
                        }
                    }
                ]
            },
            {
                "title": "Delete trail/path",
                "method": "POST",
                "path": "/data/otn/connections/{connectionId}/delete?type=NtwConnDelete",
                "path_example": "/data/otn/connections/1175/delete?type=NtwConnDelete"
            }
        ]
    },
    {
        "groupTitle": "Path",
        "cmds": [
            {
                "title": "List all paths",
                "method": "GET",
                "path": "/data/otn/connections/paths"
            },
            {
                "title": "Get one path",
                "method": "GET",
                "path": "/data/otn/connections/paths/{id}",
                "path_example": "/data/otn/connections/paths/44"
            }
        ]
    }
];