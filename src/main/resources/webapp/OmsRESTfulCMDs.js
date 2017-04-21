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
        "groupTitle": "Ne",
        "cmds": [
            {
                "title": "List all Nes",
                "method": "GET",
                "path": "/data/npr/nes"
            },
            {
                "title": "Get one Ne",
                "method": "GET",
                "path": "/data/npr/nes/{id}",
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/npr/nes/1"
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
            },
            {
                "title": "Get additionalInfo for one Port",
                "method": "GET",
                "path": "/eqm/Tp/AdditionalInfo/{neGroupId}/{neId}/{portName}",
                "path_example": [
                    {
                        "title": "",
                        "content": "/eqm/Tp/AdditionalInfo/100/1/AHPLG-1-2-LINE"
                    }
                ]
            }
        ]
    },
    {
        "groupTitle": "Equipment",
        "cmds": [
            {
                "title": "List all equipments (shelf, slot, module) on NE",
                "method": "GET",
                "path": "/eqm/Equipment/All/{neGroupId}/{neId}",
                "path_example": [
                    {
                        "title": "",
                        "content": "/eqm/Equipment/All/100/1"
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
                "title": "Delete external TL",
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
                "title": "Delete internal TL",
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
                        "title": " create ODU2 trail",
                        "content": {
                            "connectionname": "cm_odu2_unpro_ne1_ne4_1",
                            "trailrate": "ODU2",
                            "routedisplay": "true",
                            "orderstep": "9",
                            "fromporttype1": "Terminated",
                            "toporttype1": "Terminated",
                            "fromporttype2": "Terminated",
                            "toporttype2": "Terminated",
                            "fromne1": "NE1",
                            "fromport1": "11STAR1-1-6-L1-1",
                            "fromport1_AdditionalInfo": {
                                "cardName": "11STAR1"
                            },
                            "tone1": "NE4",
                            "toport1": "11STAR1-1-6-L1-1",
                            "toport1_AdditionalInfo": {
                                "cardName": "11STAR1"
                            },
                            "fromport2": "",
                            "toport2": ""
                        }
                    },
                    {
                        "title": " create OTU2 trail",
                        "content": {
                            "connectionname": "cm_otu2_unpro_ne1_ne4_1",
                            "trailrate": "OTU2",
                            "routedisplay": "false",
                            "orderstep": "9",
                            "fromporttype1": "UnTerminated",
                            "toporttype1": "UnTerminated",
                            "fromporttype2": "UnTerminated",
                            "toporttype2": "UnTerminated",
                            "fromne1": "NE1",
                            "fromport1": "11STAR1-1-6-L1",
                            "fromport1_AdditionalInfo": {
                                "cardName": "11STAR1"
                            },
                            "tone1": "NE4",
                            "toport1": "11STAR1-1-6-L1",
                            "toport1_AdditionalInfo": {
                                "cardName": "11STAR1"
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
                    "Tag": "Cmd_RemoveConnection"
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
                    "Tag": "Cmd_RemoveConnectionWithClients"
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
                        "title": " create 10GbE path",
                        "content": {
                            "connectionname": "cm_dsr_10gbe_unpro_1",
                            "serviceratetype": "Ethernet",
                            "servicerate": "10GbE",
                            "routedisplay": "false",
                            "orderstep": "9",
                            "fromporttype1": "Terminated",
                            "toporttype1": "Terminated",
                            "fromporttype2": "Terminated",
                            "toporttype2": "Terminated",
                            "fromne1": "NE1",
                            "fromport1": "11STAR1-1-6-C1",
                            "fromport1_AdditionalInfo": {
                                "cardName": "11STAR1"
                            },
                            "tone1": "NE4",
                            "toport1": "11STAR1-1-6-C1",
                            "toport1_AdditionalInfo": {
                                "cardName": "11STAR1"
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
                    "Tag": "Cmd_RemoveConnection"
                }
            }
        ]
    },
    {
        "groupTitle": "Alarm",
        "cmds": [
            {
                "title": "Get all active alarms for one node",
                "method": "GET",
                "path": "/data/eml/alarms?associatedNodeId={nodeId}",
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/eml/alarms?associatedNodeId=3"
                    }
                ]
            }
        ]
    },
    {
        "groupTitle": "Pm",
        "cmds": [
            {
                "title": "Get all pmtps for one node",
                "method": "GET",
                "path": "/data/cpm/showpmtps/{nodeId}/{cltTz}",
                "path_example": [
                    {
                        "title": "",
                        "content": "/data/cpm/showpmtps/3/480"
                    }
                ],
                "responseBody_example": [
                    {
                        "title": "Returned pmtps",
                        "content": {
                            "identifier": "1",
                            "items": [
                                {
                                    "userabel": "NE1/260SCX2-1-11-L1:OTU4:FOFFR:NEND:Receive:1-DAY,260SCX2-1-11-L1||:20:5:2:2",
                                    "type": "ANALOG",
                                    "status": 1,
                                    "collPeriod": "2017-04-07 18:30:00",
                                    "id": "0",
                                    "neLabel": "NE1",
                                    "supportedCounters": "FOFFR;FOFFRH;FOFFRL",
                                    "tpLabel": "NE1/260SCX2-1-11-L1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "FOFFR",
                                    "statusStr": "Not Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-L1:OTU4:OPR:NEND:Receive:1-DAY,260SCX2-1-11-L1||:20:5:2:2",
                                    "type": "ANALOG",
                                    "status": 1,
                                    "collPeriod": "2017-04-07 18:30:00",
                                    "id": "1",
                                    "neLabel": "NE1",
                                    "supportedCounters": "OPR-AVG;OPR-H;OPR-L",
                                    "tpLabel": "NE1/260SCX2-1-11-L1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "OPR",
                                    "statusStr": "Not Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-L1:OTU4:CDR:NEND:Receive:1-DAY,260SCX2-1-11-L1||:20:5:2:2",
                                    "type": "ANALOG",
                                    "status": 1,
                                    "collPeriod": "2017-04-07 18:30:00",
                                    "id": "2",
                                    "neLabel": "NE1",
                                    "supportedCounters": "CDR;CDRH;CDRL",
                                    "tpLabel": "NE1/260SCX2-1-11-L1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "CDR",
                                    "statusStr": "Not Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-L1:OTU4:PreFECBits:NEND:Receive:1-DAY,260SCX2-1-11-L1||:20:5:2:2",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "3",
                                    "neLabel": "NE1",
                                    "supportedCounters": "PREFEC-AVG;PREFEC-MAX;PREFEC-MIN",
                                    "tpLabel": "NE1/260SCX2-1-11-L1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "PreFECBits",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-8-L1:OTU4:OPT:NEND:Transmit:1-DAY,260SCX2-1-8-L1||:20:5:1:2",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "4",
                                    "neLabel": "NE1",
                                    "supportedCounters": "OPT-AVG;OPT-H;OPT-L",
                                    "tpLabel": "NE1/260SCX2-1-8-L1",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "OPT",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-L1:OTU4:OPT:NEND:Transmit:1-DAY,260SCX2-1-11-L1||:20:5:1:2",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "5",
                                    "neLabel": "NE1",
                                    "supportedCounters": "OPT-AVG;OPT-H;OPT-L",
                                    "tpLabel": "NE1/260SCX2-1-11-L1",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "OPT",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-L1:OTU4:DGDR:NEND:Receive:1-DAY,260SCX2-1-11-L1||:20:5:2:2",
                                    "type": "ANALOG",
                                    "status": 1,
                                    "collPeriod": "2017-04-07 18:30:00",
                                    "id": "6",
                                    "neLabel": "NE1",
                                    "supportedCounters": "DGDRH;DGDRL;DGDRR",
                                    "tpLabel": "NE1/260SCX2-1-11-L1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "DGDR",
                                    "statusStr": "Not Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-8-L1:OTU4:PreFECBits:NEND:Receive:1-DAY,260SCX2-1-8-L1||:20:5:2:2",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "7",
                                    "neLabel": "NE1",
                                    "supportedCounters": "PREFEC-AVG;PREFEC-MAX;PREFEC-MIN",
                                    "tpLabel": "NE1/260SCX2-1-8-L1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "PreFECBits",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:OPT:NEND:Transmit:15-MIN,260SCX2-1-11-C1||:20:5:1:1",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "8",
                                    "neLabel": "NE1",
                                    "supportedCounters": "OPT-AVG;OPT-H;OPT-L",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "15 Minutes",
                                    "layerRate": "100GIGE",
                                    "groupName": "OPT",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-L1:OTU4:OPT:NEND:Transmit:15-MIN,260SCX2-1-11-L1||:20:5:1:1",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "9",
                                    "neLabel": "NE1",
                                    "supportedCounters": "OPT-AVG;OPT-H;OPT-L",
                                    "tpLabel": "NE1/260SCX2-1-11-L1",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "15 Minutes",
                                    "layerRate": "OTU4",
                                    "groupName": "OPT",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-L1:OTU4:PreFECBits:NEND:Receive:15-MIN,260SCX2-1-11-L1||:20:5:2:1",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "10",
                                    "neLabel": "NE1",
                                    "supportedCounters": "PREFEC-AVG;PREFEC-MAX;PREFEC-MIN",
                                    "tpLabel": "NE1/260SCX2-1-11-L1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "15 Minutes",
                                    "layerRate": "OTU4",
                                    "groupName": "PreFECBits",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:OPT:NEND:Transmit:1-DAY,260SCX2-1-11-C1||:20:5:1:2",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "11",
                                    "neLabel": "NE1",
                                    "supportedCounters": "OPT-AVG;OPT-H;OPT-L",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "1 Day",
                                    "layerRate": "100GIGE",
                                    "groupName": "OPT",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/AHPHG-1-16-LINE:OTS:OPOUT:NEND:Transmit:15-MIN,AHPHG-1-16-LINE||:30:5:1:1",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "12",
                                    "neLabel": "NE1",
                                    "supportedCounters": "TOPT-AVG;TOPT-H;TOPT-L",
                                    "tpLabel": "NE1/AHPHG-1-16-LINE",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "15 Minutes",
                                    "layerRate": "OTS",
                                    "groupName": "OPOUT",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/AHPHG-1-16-LINE:OTS:OPIN:NEND:Receive:15-MIN,AHPHG-1-16-LINE||:30:5:2:1",
                                    "type": "ANALOG",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "13",
                                    "neLabel": "NE1",
                                    "supportedCounters": "TOPR-AVG;TOPR-H;TOPR-L",
                                    "tpLabel": "NE1/AHPHG-1-16-LINE",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "15 Minutes",
                                    "layerRate": "OTS",
                                    "groupName": "OPIN",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Receive:1-DAY,260SCX2-1-11-C1||:200:5:2:2",
                                    "type": "ETH",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "14",
                                    "neLabel": "NE1",
                                    "supportedCounters": "ETHBCSTPKTS;ETHCRCAE;ETHFRGMTS;ETHJABRS;ETHJUMBOPKTS;ETHMCSTPKTS;ETHOCTETS;ETHOVRSIZEPKTS;ETHPKTER;ETHPKTS;ETHPKTS1023OCTETS;ETHPKTS127OCTETS;ETHPKTS1518OCTETS;ETHPKTS255OCTETS;ETHPKTS511OCTETS;ETHPKTS64OCTETS;ETHUNDRSIZEPKTS",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "100GIGE",
                                    "groupName": "Ethernet",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Receive:15-MIN,260SCX2-1-11-C1||:200:5:2:1",
                                    "type": "ETH",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "15",
                                    "neLabel": "NE1",
                                    "supportedCounters": "ETHBCSTPKTS;ETHCRCAE;ETHFRGMTS;ETHJABRS;ETHJUMBOPKTS;ETHMCSTPKTS;ETHOCTETS;ETHOVRSIZEPKTS;ETHPKTER;ETHPKTS;ETHPKTS1023OCTETS;ETHPKTS127OCTETS;ETHPKTS1518OCTETS;ETHPKTS255OCTETS;ETHPKTS511OCTETS;ETHPKTS64OCTETS;ETHUNDRSIZEPKTS",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "15 Minutes",
                                    "layerRate": "100GIGE",
                                    "groupName": "Ethernet",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Transmit:1-DAY,260SCX2-1-11-C1||:200:5:1:2",
                                    "type": "ETH",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "16",
                                    "neLabel": "NE1",
                                    "supportedCounters": "ETHBCSTPKTS;ETHCRCAE;ETHFRGMTS;ETHJABRS;ETHJUMBOPKTS;ETHMCSTPKTS;ETHOCTETS;ETHOVRSIZEPKTS;ETHPKTER;ETHPKTS;ETHPKTS1023OCTETS;ETHPKTS127OCTETS;ETHPKTS1518OCTETS;ETHPKTS255OCTETS;ETHPKTS511OCTETS;ETHPKTS64OCTETS;ETHUNDRSIZEPKTS",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "1 Day",
                                    "layerRate": "100GIGE",
                                    "groupName": "Ethernet",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Transmit:15-MIN,260SCX2-1-11-C1||:200:5:1:1",
                                    "type": "ETH",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "17",
                                    "neLabel": "NE1",
                                    "supportedCounters": "ETHBCSTPKTS;ETHCRCAE;ETHFRGMTS;ETHJABRS;ETHJUMBOPKTS;ETHMCSTPKTS;ETHOCTETS;ETHOVRSIZEPKTS;ETHPKTER;ETHPKTS;ETHPKTS1023OCTETS;ETHPKTS127OCTETS;ETHPKTS1518OCTETS;ETHPKTS255OCTETS;ETHPKTS511OCTETS;ETHPKTS64OCTETS;ETHUNDRSIZEPKTS",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "15 Minutes",
                                    "layerRate": "100GIGE",
                                    "groupName": "Ethernet",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Receive:1-DAY,260SCX2-1-11-C1||:200:5:2:2",
                                    "type": "SDH",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "18",
                                    "neLabel": "NE1",
                                    "supportedCounters": "CV-PCS;ES-PCS;SEFS-PCS;SES-PCS",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "100GIGE",
                                    "groupName": "PCS",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Receive:15-MIN,260SCX2-1-11-C1||:200:5:2:1",
                                    "type": "SDH",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "19",
                                    "neLabel": "NE1",
                                    "supportedCounters": "CV-PCS;ES-PCS;SEFS-PCS;SES-PCS",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "15 Minutes",
                                    "layerRate": "100GIGE",
                                    "groupName": "PCS",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Transmit:1-DAY,260SCX2-1-11-C1||:200:5:1:2",
                                    "type": "SDH",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "20",
                                    "neLabel": "NE1",
                                    "supportedCounters": "CV-PCS;ES-PCS;SEFS-PCS;SES-PCS",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "1 Day",
                                    "layerRate": "100GIGE",
                                    "groupName": "PCS",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Transmit:15-MIN,260SCX2-1-11-C1||:200:5:1:1",
                                    "type": "SDH",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "21",
                                    "neLabel": "NE1",
                                    "supportedCounters": "CV-PCS;ES-PCS;SEFS-PCS;SES-PCS",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "granularity": "15 Minutes",
                                    "layerRate": "100GIGE",
                                    "groupName": "PCS",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/OTUODU4-1-11-L1-CH1:ODU4:ODURX:NEND:Receive:1-DAY,260SCX2-1-11-L1||/odu4=1:236:5:2:2",
                                    "type": "SDH",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "22",
                                    "neLabel": "NE1",
                                    "supportedCounters": "BBE-ODU;ES-ODU;SES-ODU;UAS-ODU",
                                    "tpLabel": "NE1/OTUODU4-1-11-L1-CH1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "ODU4",
                                    "groupName": "ODURX",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/OTUODU4-1-11-L1-CH1:ODU4:ODURX:NEND:Receive:15-MIN,260SCX2-1-11-L1||/odu4=1:236:5:2:1",
                                    "type": "SDH",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "23",
                                    "neLabel": "NE1",
                                    "supportedCounters": "BBE-ODU;ES-ODU;SES-ODU;UAS-ODU",
                                    "tpLabel": "NE1/OTUODU4-1-11-L1-CH1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "15 Minutes",
                                    "layerRate": "ODU4",
                                    "groupName": "ODURX",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/OTU-1-8-L1-CH1:OTU4:OTU:NEND:Receive:1-DAY,260SCX2-1-8-L1||/frequency=tunable-number=1:234:5:2:2",
                                    "type": "SDH",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "24",
                                    "neLabel": "NE1",
                                    "supportedCounters": "BBE-OTU;ES-OTU;IAES;SES-OTU;UAS-OTU",
                                    "tpLabel": "NE1/OTU-1-8-L1-CH1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "OTU",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/OTU-1-11-L1-CH1:OTU4:OTU:NEND:Receive:1-DAY,260SCX2-1-11-L1||/frequency=tunable-number=1:234:5:2:2",
                                    "type": "SDH",
                                    "status": 0,
                                    "collPeriod": "2017-04-11 18:30:00",
                                    "id": "25",
                                    "neLabel": "NE1",
                                    "supportedCounters": "BBE-OTU;ES-OTU;IAES;SES-OTU;UAS-OTU",
                                    "tpLabel": "NE1/OTU-1-11-L1-CH1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "1 Day",
                                    "layerRate": "OTU4",
                                    "groupName": "OTU",
                                    "statusStr": "Active"
                                },
                                {
                                    "userabel": "NE1/OTU-1-11-L1-CH1:OTU4:OTU:NEND:Receive:15-MIN,260SCX2-1-11-L1||/frequency=tunable-number=1:234:5:2:1",
                                    "type": "SDH",
                                    "status": 0,
                                    "collPeriod": "2017-04-13 03:15:00",
                                    "id": "26",
                                    "neLabel": "NE1",
                                    "supportedCounters": "BBE-OTU;ES-OTU;IAES;SES-OTU;UAS-OTU",
                                    "tpLabel": "NE1/OTU-1-11-L1-CH1",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "granularity": "15 Minutes",
                                    "layerRate": "OTU4",
                                    "groupName": "OTU",
                                    "statusStr": "Active"
                                }
                            ],
                            "colnames": "",
                            "status": null,
                            "operTime": null
                        }
                    }
                ]
            },
            {
                "title": "Query history pm data",
                "method": "POST",
                "path": "/pm/pmdata",
                "postBody": {
                    "clientTz": 480,
                    "fromTime": "2017-04-01-17:42",
                    "endTime": "2017-04-13-17:42",
                    "granularity": "15 minutes",
                    "selectedEntities": "NE1@NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Receive:15-MIN,260SCX2-1-11-C1||:200:5:2:1",
                    "expFormat": "",
                    "operationType": 0
                },
                "postBody_example": [
                    {
                        "title": "15 minutes",
                        "content": {
                            "clientTz": 480,
                            "fromTime": "2017-04-01-17:42",
                            "endTime": "2017-04-13-17:42",
                            "granularity": "15 minutes",
                            "selectedEntities": "NE1@NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Receive:15-MIN,260SCX2-1-11-C1||:200:5:2:1",
                            "expFormat": "",
                            "operationType": 0
                        }
                    },
                    {
                        "title": "day",
                        "content": {
                            "clientTz": 480,
                            "fromTime": "2017-04-01-14:26",
                            "endTime": "2017-04-13-14:26",
                            "granularity": "day",
                            "selectedEntities": "NE1@NE1/260SCX2-1-8-L1:OTU4:OPT:NEND:Transmit:1-DAY,260SCX2-1-8-L1||:20:5:1:2",
                            "expFormat": "",
                            "operationType": 0
                        }
                    },
                    {
                        "title": "ALL",
                        "content": {
                            "clientTz": 480,
                            "fromTime": "2017-04-01-17:31",
                            "endTime": "2017-04-13-17:31",
                            "granularity": "ALL",
                            "selectedEntities": "NE1@NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Receive:1-DAY,260SCX2-1-11-C1||:200:5:2:2^NE1@NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Receive:15-MIN,260SCX2-1-11-C1||:200:5:2:1^NE1@NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Transmit:1-DAY,260SCX2-1-11-C1||:200:5:1:2^NE1@NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Transmit:15-MIN,260SCX2-1-11-C1||:200:5:1:1^NE1@NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Receive:1-DAY,260SCX2-1-11-C1||:200:5:2:2^NE1@NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Receive:15-MIN,260SCX2-1-11-C1||:200:5:2:1^NE1@NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Transmit:1-DAY,260SCX2-1-11-C1||:200:5:1:2^NE1@NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Transmit:15-MIN,260SCX2-1-11-C1||:200:5:1:1",
                            "expFormat": "",
                            "operationType": 0
                        }
                    }
                ],
                "responseBody_example": [
                    {
                        "title": "Query result example (15min & day)",
                        "content": {
                            "identifier": "1",
                            "items": [
                                {
                                    "timestamp": "2017-04-09 18:30:00 - 2017-04-10 18:30:00",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "status": 0,
                                    "granularity": 0,
                                    "neLabel": "NE1",
                                    "id": "0",
                                    "connName": "NE1/260SCX2-1-11-C1 NE3/260SCX2-1-11-C1 100GbE",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "pmData": {
                                        "ETHPKTS511OCTETS": "0",
                                        "ETHOCTETS": "0",
                                        "ETHBCSTPKTS": "0",
                                        "ETHFRGMTS": "0",
                                        "ETHPKTS1023OCTETS": "0",
                                        "ETHPKTER": "0",
                                        "ETHJUMBOPKTS": "0",
                                        "ETHPKTS64OCTETS": "0",
                                        "ETHCRCAE": "0",
                                        "ETHUNDRSIZEPKTS": "0",
                                        "ETHPKTS": "0",
                                        "ETHMCSTPKTS": "0",
                                        "ETHPKTS1518OCTETS": "0",
                                        "ETHPKTS255OCTETS": "0",
                                        "ETHOVRSIZEPKTS": "0",
                                        "ETHJABRS": "0",
                                        "ETHPKTS127OCTETS": "0"
                                    },
                                    "layerRate": "100GIGE",
                                    "hookmapper": "NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Receive:1-DAY,260SCX2-1-11-C1||:200:5:2:2",
                                    "groupName": "Ethernet"
                                },
                                {
                                    "timestamp": "2017-04-09 18:30:00 - 2017-04-10 18:30:00",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "status": 0,
                                    "granularity": 0,
                                    "neLabel": "NE1",
                                    "id": "1",
                                    "connName": "NE1/260SCX2-1-11-C1 NE3/260SCX2-1-11-C1 100GbE",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "pmData": {
                                        "ETHPKTS511OCTETS": "0",
                                        "ETHOCTETS": "0",
                                        "ETHBCSTPKTS": "0",
                                        "ETHFRGMTS": "0",
                                        "ETHPKTS1023OCTETS": "0",
                                        "ETHPKTER": "0",
                                        "ETHJUMBOPKTS": "0",
                                        "ETHPKTS64OCTETS": "0",
                                        "ETHCRCAE": "0",
                                        "ETHUNDRSIZEPKTS": "0",
                                        "ETHPKTS": "0",
                                        "ETHMCSTPKTS": "0",
                                        "ETHPKTS1518OCTETS": "0",
                                        "ETHPKTS255OCTETS": "0",
                                        "ETHOVRSIZEPKTS": "0",
                                        "ETHJABRS": "0",
                                        "ETHPKTS127OCTETS": "0"
                                    },
                                    "layerRate": "100GIGE",
                                    "hookmapper": "NE1/260SCX2-1-11-C1:100GIGE:Ethernet:NEND:Transmit:1-DAY,260SCX2-1-11-C1||:200:5:1:2",
                                    "groupName": "Ethernet"
                                },
                                {
                                    "timestamp": "2017-04-13 03:45:00 - 2017-04-13 04:00:00",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "status": 0,
                                    "granularity": 2,
                                    "neLabel": "NE1",
                                    "id": "818",
                                    "connName": "NE1/260SCX2-1-11-C1 NE3/260SCX2-1-11-C1 100GbE",
                                    "location": "Near End",
                                    "direction": "Receive",
                                    "pmData": {
                                        "CV-PCS": "0",
                                        "ES-PCS": "899",
                                        "SEFS-PCS": "899",
                                        "SES-PCS": "899"
                                    },
                                    "layerRate": "100GIGE",
                                    "hookmapper": "NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Receive:15-MIN,260SCX2-1-11-C1||:200:5:2:1",
                                    "groupName": "PCS"
                                },
                                {
                                    "timestamp": "2017-04-13 03:45:00 - 2017-04-13 04:00:00",
                                    "tpLabel": "NE1/260SCX2-1-11-C1",
                                    "status": 0,
                                    "granularity": 2,
                                    "neLabel": "NE1",
                                    "id": "819",
                                    "connName": "NE1/260SCX2-1-11-C1 NE3/260SCX2-1-11-C1 100GbE",
                                    "location": "Near End",
                                    "direction": "Transmit",
                                    "pmData": {
                                        "CV-PCS": "0",
                                        "ES-PCS": "899",
                                        "SEFS-PCS": "899",
                                        "SES-PCS": "899"
                                    },
                                    "layerRate": "100GIGE",
                                    "hookmapper": "NE1/260SCX2-1-11-C1:100GIGE:PCS:NEND:Transmit:15-MIN,260SCX2-1-11-C1||:200:5:1:1",
                                    "groupName": "PCS"
                                }
                            ],
                            "colnames": "ETHUNDRSIZEPKTS,ETHPKTS64OCTETS,ETHPKTS511OCTETS,ETHPKTS255OCTETS,ETHPKTS1518OCTETS,ETHPKTS127OCTETS,ETHPKTS1023OCTETS,ETHPKTS,ETHPKTER,ETHOVRSIZEPKTS,ETHOCTETS,ETHMCSTPKTS,ETHJUMBOPKTS,ETHJABRS,ETHFRGMTS,ETHCRCAE,ETHBCSTPKTS,SES-PCS,SEFS-PCS,ES-PCS,CV-PCS",
                            "status": "OK",
                            "operTime": null
                        }
                    }
                ]

            }
        ]
    }
];