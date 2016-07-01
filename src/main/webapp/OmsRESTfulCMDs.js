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
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/npr/nodes/24"
                    }
                ]
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
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/npr/Port?neId=24"
                    }
                ]
            },
            {
                "title": "Get one Port",
                "method": "GET",
                "path": "/data/npr/Port/{id}",
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/npr/Port/2685"
                    }
                ]
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
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/npr/physicalConns/44"
                    }
                ]
            },
            {
                "title": "Create internal TL",
                "method": "POST",
                "path": "/eqm/tl",
                "postBody": {
                    "firstPort": {
                        "entityName": "SFD-27-1-9170",
                        "connectionFrom": "SFD-27-1-9170",
                        "connectionTo": "OPS-4-5-A",
                        "signalType": "OCH",
                        "signalAssigned": "true",
                        "groupId": "100",
                        "neId": "29",
                        "neType": "1830pss-32"
                    },
                    "secondPort": {
                        "entityName": "OPS-4-5-A",
                        "connectionFrom": "OPS-4-5-A",
                        "connectionTo": "SFD-27-1-9170",
                        "signalType": "OCH",
                        "signalAssigned": "true",
                        "groupId": "100",
                        "neId": "29",
                        "neType": "1830pss-32"
                    },
                    "connectionType": "CD_BID",
                    "tlType": "NonMPO"
                },
                "postBody_example": [
                    {
                        "title": "OCH",
                        "content": {
                            "firstPort": {
                                "entityName": "SFD-27-1-9170",
                                "connectionFrom": "SFD-27-1-9170",
                                "connectionTo": "OPS-4-5-A",
                                "signalType": "OCH",
                                "signalAssigned": "true",
                                "groupId": "100",
                                "neId": "29",
                                "neType": "1830pss-32"
                            },
                            "secondPort": {
                                "entityName": "OPS-4-5-A",
                                "connectionFrom": "OPS-4-5-A",
                                "connectionTo": "SFD-27-1-9170",
                                "signalType": "OCH",
                                "signalAssigned": "true",
                                "groupId": "100",
                                "neId": "29",
                                "neType": "1830pss-32"
                            },
                            "connectionType": "CD_BID",
                            "tlType": "NonMPO"
                        }
                    },
                    {
                        "title": "OTS",
                        "content": {
                            "firstPort": {
                                "entityName": "SFD-27-1-OMD",
                                "connectionFrom": "SFD-27-1-OMD",
                                "connectionTo": "ALPHG-4-2-SIG",
                                "signalType": "OTS",
                                "signalAssigned": "true",
                                "groupId": "100",
                                "neId": "29",
                                "neType": "1830pss-32"
                            },
                            "secondPort": {
                                "entityName": "ALPHG-4-2-SIG",
                                "connectionFrom": "ALPHG-4-2-SIG",
                                "connectionTo": "SFD-27-1-OMD",
                                "signalType": "OTS",
                                "signalAssigned": "true",
                                "groupId": "100",
                                "neId": "29",
                                "neType": "1830pss-32"
                            },
                            "connectionType": "CD_BID",
                            "tlType": "NonMPO"
                        }
                    },
                    {
                        "title": "OTU2",
                        "content": {
                            "firstPort": {
                                "entityName": "11STGE12-4-8-L1",
                                "connectionFrom": "11STGE12-4-8-L1",
                                "connectionTo": "OPS-4-5-SIG",
                                "signalType": "OTU2",
                                "signalAssigned": "true",
                                "groupId": "100",
                                "neId": "29",
                                "neType": "1830pss-32"
                            },
                            "secondPort": {
                                "entityName": "OPS-4-5-SIG",
                                "connectionFrom": "OPS-4-5-SIG",
                                "connectionTo": "11STGE12-4-8-L1",
                                "signalType": "OTU2",
                                "signalAssigned": "true",
                                "groupId": "100",
                                "neId": "29",
                                "neType": "1830pss-32"
                            },
                            "connectionType": "CD_BID",
                            "tlType": "NonMPO"
                        }
                    }
                ]
            },
            {
                "title": "Create external TL (2 Ends)",
                "method": "POST",
                "path": "/data/npr/physicalConns",
                "postBody": {
                    "Tag": "CMD_WIZTYPE_createConn",
                    "userLabel": "cm_pc_ne5_ne6_4-2",
                    "connectionType": "chooserConnWdm",
                    "aNode": "NE5",
                    "aPort": "NE5/ALPHG-4-2-LINE",
                    "aPort_id": 8710,
                    "zNode": "NE6",
                    "zPort": "NE6/ALPHG-4-2-LINE",
                    "zPort_id": 8816
                },
                "postBody_example": [
                    {
                        "title": "",
                        "content": {
                            "Tag": "CMD_WIZTYPE_createConn",
                            "userLabel": "cm_pc_ne5_ne6_4-2",
                            "connectionType": "chooserConnWdm",
                            "aNode": "NE5",
                            "aPort": "NE5/ALPHG-4-2-LINE",
                            "aPort_id": 8710,
                            "zNode": "NE6",
                            "zPort": "NE6/ALPHG-4-2-LINE",
                            "zPort_id": 8816
                        }
                    }
                ]
            },
            {
                "title": "Create external TL (4 Ends)",
                "method": "POST",
                "path": "/data/npr/physicalConns",
                "postBody": {
                    "Tag": "CMD_WIZTYPE_createConn",
                    "userLabel": "cm_pl_4e_1_4",
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
                "postBody_example": [
                    {
                        "title": "",
                        "content": {
                            "Tag": "CMD_WIZTYPE_createConn",
                            "userLabel": "cm_pl_4e_1_4",
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
                    }
                ]
            },
            {
                "title": "Delete TL",
                "method": "DELETE",
                "path": "/data/npr/physicalConns/{connectId}",
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/npr/physicalConns/44"
                    }
                ]
            },
            {
                "title": "Delete internal TL(SFD)",
                "method": "DELETE",
                "path": "/eqm/tl/{aPortName}/{bPortName}/{neGroupId}/{neId}/{neType}/{direction}",
                "path_example": [
                    {
                        "title": "OCH",
                        "content": "/eqm/tl/SFD-27-1-9170/OPS-4-5-A/100/29/1830pss-32/CD_BID"
                    },
                    {
                        "title": "OTS",
                        "content": "/eqm/tl/SFD-27-1-OMD/ALPHG-4-2-SIG/100/29/1830pss-32/CD_BID"
                    },
                    {
                        "title": "OTU2",
                        "content": "/eqm/tl/11STGE12-4-8-L1/OPS-4-5-SIG/100/29/1830pss-32/CD_BID"
                    }
                ]
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
                "path": "/data/otn/connections/trails/{connectionId}",
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/otn/connections/trails/44"
                    }
                ]
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
                        "title": " create OTU2 trail",
                        "content": {
                            "connectionname": "cm_otu2_1",
                            "trailrate": "OTU2",
                            "routedisplay": "false",
                            "orderstep": "9",
                            "fromporttype1": "Terminated",
                            "toporttype1": "Terminated",
                            "fromporttype2": "Terminated",
                            "toporttype2": "Terminated",
                            "fromne1": "NE1",
                            "fromport1": "11QPA4-2-5-L1-1",
                            "fromport1_AdditionalInfo": {
                                "cardName": "11QPA4"
                            },
                            "tone1": "NE4",
                            "toport1": "11QPA4-2-5-L1-1",
                            "toport1_AdditionalInfo": {
                                "cardName": "11QPA4"
                            },
                            "fromport2": "",
                            "toport2": ""
                        }
                    },
                    {
                        "title": " create ODU2 trail",
                        "content": {
                            "connectionname": "cm_odu2_1",
                            "trailrate": "ODU2",
                            "routedisplay": "false",
                            "orderstep": "9",
                            "fromporttype1": "Terminated",
                            "toporttype1": "Terminated",
                            "fromporttype2": "Terminated",
                            "toporttype2": "Terminated",
                            "fromne1": "NE1",
                            "fromport1": "11QPA4-2-5-L1-1",
                            "fromport1_AdditionalInfo": {
                                "cardName": "11QPA4"
                            },
                            "tone1": "NE4",
                            "toport1": "11QPA4-2-5-L1-1",
                            "toport1_AdditionalInfo": {
                                "cardName": "11QPA4"
                            },
                            "fromport2": "",
                            "toport2": ""
                        }
                    }
                ]
            },
            {
                "title": "Create Trail (OPSA protected)",
                "method": "POST",
                "path": "/data/otn/Connection",
                "postBody_fixed_part": {
                    "ASONRouted": "false",
                    "preferredRestorationMode": "norestore",
                    "reversionMode": "manual",
                    "waitForServerRestoration": "false",
                    "protectiontype": "11",
                    "networkProtectionMode": "5",
                    "clientprotectiontype": "0",
                    "switchType": "1",
                    "revertive": "1",
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
                    "hasopsb": "no",
                    "hasycable": "no",
                    "hassdx": "no",
                    "operation": "create",
                    "otnRoutingConstraints": [],
                    "defaultpriority": "4",
                    "defaultsetuppriority": "5",
                    "customerName": ""
                },
                "postBody_customized_part_examples": [
                    {
                        "title": " create ODU2 OPSA trail",
                        "content": {
                            "connectionname": "cm_odu2_p_1",
                            "trailrate": "ODU2",
                            "routedisplay": "true",
                            "orderstep": "9",
                            "fromporttype1": "Terminated",
                            "toporttype1": "Terminated",
                            "fromporttype2": "Terminated",
                            "toporttype2": "Terminated",
                            "fromne1": "NE3",
                            "fromport1": "11STGE12-1-3-L1-1",
                            "fromport1_AdditionalInfo": {
                                "cardName": "11STGE12"
                            },
                            "tone1": "NE4",
                            "toport1": "11STGE12-1-3-L1-1",
                            "toport1_AdditionalInfo": {
                                "cardName": "11STGE12"
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
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/otn/connections/1175/delete?type=NtwConnDelete"
                    }
                ],
                "postBody": {
                    "Tag":"Cmd_RemoveConnection"
                }
            },
            {
                "title": "Delete trail with clients",
                "method": "POST",
                "path": "/data/otn/connections/{connectionId}/delete?type=NtwConnDeleteWithClients",
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/otn/connections/1356/delete?type=NtwConnDeleteWithClients"
                    }
                ],
                "postBody": {
                    "Tag":"Cmd_RemoveConnectionWithClients"
                }
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
                "path": "/data/otn/connections/paths/{connectionId}",
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/otn/connections/paths/44"
                    }
                ]
            },
            {
                "title": "Create Path",
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
                    "connshape": "8",
                    "lopc": "false",
                    "fecMode": "Default",
                    "wavekeyConfig": "Auto",
                    "routing": "1",
                    "autoprovision": "true",
                    "integratedprovision": "false",
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
                    "hasopsb": "no",
                    "hasycable": "no",
                    "hassdx": "no",
                    "operation": "create",
                    "otnRoutingConstraints": [],
                    "defaultpriority": "4",
                    "defaultsetuppriority": "5",
                    "customerName": ""
                },
                "postBody_customized_part_examples": [
                    {
                        "title": " create 1GbE path",
                        "content": {
                            "connectionname": "cm_dsr_1gbe_p_1",
                            "serviceratetype": "Ethernet",
                            "servicerate": "1GbE",
                            "routedisplay": "true",
                            "orderstep": "9",
                            "fromporttype1": "Terminated",
                            "toporttype1": "Terminated",
                            "fromporttype2": "Terminated",
                            "toporttype2": "Terminated",
                            "fromne1": "NE3",
                            "fromport1": "11STGE12-1-3-C1",
                            "fromport1_AdditionalInfo": {
                                "cardName": "11STGE12"
                            },
                            "tone1": "NE4",
                            "toport1": "11STGE12-1-3-C1",
                            "toport1_AdditionalInfo": {
                                "cardName": "11STGE12"
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
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/otn/connections/1175/delete?type=NtwConnDelete"
                    }
                ],
                "postBody": {
                    "Tag":"Cmd_RemoveConnection"
                }
            }
        ]
    }
];