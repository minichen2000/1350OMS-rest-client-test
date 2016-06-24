package com.alu.restfulClientTestMgr.OmsClient;

public class ConfigKey
{

    public static final String EML_TABLE_VERSION = "EML_TABLE_VERSION";

    public static final String DEF_EML_TABLE_VERSION = "12_1";

    public static final String SCHEDULED_SERVICE_THREAD_POOL_SIZE = "SCHEDULED_SERVICE_THREAD_POOL_SIZE";

    public static final int DEFAULT_SCHEDULED_SERVICE_THREAD_POOL_SIZE = 3;

    public static final String REFERENCE_CONF_FILES = "REFERENCE_CONF_FILES";

    public static final String CORBA_NOTIFICATION_SERVICE_URI = "CORBA_NOTIFICATION_SERVICE_URI";

    public static final String PKT_CORBA_NAME_SERVICE_URI = "PKT_CORBA_NAME_SERVICE_URI";

    public static final String SDH_CORBA_NAME_SERVICE_URI = "SDH_CORBA_NAME_SERVICE_URI";

    public static final String WDM_CORBA_NAME_SERVICE_URI = "WDM_CORBA_NAME_SERVICE_URI";

    public static final String CORBA_NAME_SERVICE_URI = "CORBA_NAME_SERVICE_URI";

    public static final String JACORB_CONF_FILE = "JACORB_CONF_FILE";

    public static final String DEFAULT_JACORB_CONF_FILE = "conf/jacorb.properties";

    public static final String TMF_ADAPTER_IOR_FILE = "TMF_ADAPTER_IOR_FILE";

    public static final String DEFAULT_TMF_ADAPTER_IOR_FILE = "conf/ior.txt";

    public static final String OS_VER = "OS_VER";

    public static final String DEFAULT_OS_VER = "9.x";

    public static final String EMS_NAME = "EMS_NAME";

    public static final String DEFAULT_EMS_NAME = "EMS_ALU";

    public static final String EMS_OWER = "EMS_OWER";

    public static final String DEFAULT_EMS_OWER = "ALU";

    public static final String EMS_VERSION = "EMS_VERSION";

    public static final String DEFAULT_EMS_VERSION = "9.x";
    
    public static final String INTERFACE_VERSION = "INTERFACE_VERSION";
    
    public static final String DEFAULT_INTERFACE_VERSION = "2.0";

    public static final String EMS_TYPE = "EMS_TYPE";

    public static final String DEFAULT_EMS_TYPE = "SDH";

    public static final String IP_ADDRESS = "IP_ADDRESS";

    public static final String MAX_NE = "MAX_NE";

    public static final int DEFAULT_MAX_NE = 1000;

    public static final String TMF_ADAPTER_PING_CLIENT_INTERVAL = "TMF_ADAPTER_PING_CLIENT_INTERVAL";

    public static final int DEFAULT_TMF_ADAPTER_PING_CLIENT_INTERVAL = 60 * 1000;

    public static final String TMF_ADAPTER_HEARTBEAT_INTERVAL = "TMF_ADAPTER_HEARTBEAT_INTERVAL";

    public static final int DEFAULT_TMF_ADAPTER_HEARTBEAT_INTERVAL = 300 * 1000;

    public static final String USER_LABEL_PERSISTANCE_FILE = "USER_LABEL_PERSISTANCE_FILE";

    public static final String DEFAULT_USER_LABEL_PERSISTANCE_FILE = "store/userLabel.store";

    public static final String OWNER_PERSISTANCE_FILE = "OWNER_PERSISTANCE_FILE";

    public static final String DEFAULT_OWNER_PERSISTANCE_FILE = "store/owner.store";

    public static final String NATIVE_EMS_NAME_PERSISTANCE_FILE = "NATIVE_EMS_NAME_PERSISTANCE_FILE";

    public static final String DEFAULT_NATIVE_EMS_NAME_PERSISTANCE_FILE = "store/nativeEMSName.store";

    public static final String FRM_ENUM_CONF_FILE = "FRM_ENUM_CONF_FILE";

    public static final String DEFAULT_FRM_ENUM_CONF_FILE = "conf/FRM.mib.enum.txt";

    public static final String ADDITIONAL_INFO_PERSISTANCE_FILE = "ADDITIONAL_INFO_PERSISTANCE_FILE";

    public static final String DEFAULT_ADDITIONAL_INFO_PERSISTANCE_FILE = "store/additionalInfo.store";

    public static final String CAPABILITY_CONF_FILE = "CAPABILITY_CONF_FILE";

    public static final String TMF_ADAPTER_USER_CONF_FILE = "TMF_ADAPTER_USER_CONF_FILE";

    public static final String COLLECTOR_CORBA_WRAP_NS_PATH = "COLLECTOR_CORBA_WRAP_NS_PATH";

    public static final String DEFAULT_COLLECTOR_CORBA_WRAP_NS_PATH = "UnbiCollectorCorbaWrap";

    public static final String INTERNAL_REGISTER_INTERVAL = "INTERNAL_REGISTER_INTERVAL";

    public static final int DEFAULT_INTERNAL_REGISTER_INTERVAL = 30 * 1000;

    public static final String INTERNAL_PING_INTERVAL = "INTERNAL_PING_INTERVAL";

    public static final int DEFAULT_INTERNAL_PING_INTERVAL = 30 * 1000;

    public static final String FINTERFACE_GATEWAY_NS_PATH = "FINTERFACE_GATEWAY_NS_PATH";

    public static final String DEFAULT_FINTERFACE_GATEWAY_NS_PATH = "UnbiFinterfaceGateway";

    public static final String AS_GATEWAY_NS_PATH = "AS_GATEWAY_NS_PATH";

    public static final String DEFAULT_AS_GATEWAY_NS_PATH = "UnbiAsGateway";

    public static final String USER_LABEL_AS_TMF_NAME = "USER_LABEL_AS_TMF_NAME";

    public static final boolean DEFAULT_USER_LABEL_AS_TMF_NAME = false;

    public static final String XOS_RECONNECT_INTEERVAL = "XOS_RECONNECT_INTEERVAL";

    public static final int DEFAULT_XOS_RECONNECT_INTEERVAL = 30 * 1000;

    public static final String XOS_REQUEST_TIMEOUT = "XOS_REQUEST_TIMEOUT";

    public static final int DEFAULT_XOS_REQUEST_TIMEOUT = 60 * 1000;

    public static final int DEFAULT_XOS_REQUEST_HOWMANY = 100;

    public static final String CORBA_PORT = "CORBA_PORT";

    public static final String EML_NAME_SERVER_FILE = "EML_NAME_SERVER_FILE";

    public static final String DEFAULT_EML_NAME_SERVER_FILE = "/user/Systems/EML_1/conf/NameServerFile.nr6";

    // public static final String USE_FDNMAPPER_MAP = "USE_FDNMAPPER_MAP";

    // public static final boolean DEFAULT_USE_FDNMAPPER_MAP = false;

    public static final String USE_LC_AS_TL = "USE_LC_AS_TL";

    public static final boolean DEFAULT_USE_LC_AS_TL = false;

    public static final String EXPORT_NE_SUPPORT_RATES = "EXPORT_NE_SUPPORT_RATES";

    public static final boolean DEFAULT_EXPORT_NE_SUPPORT_RATES = true;

    public static final String EXPORT_SDH_NE_SUPPORT_RATES = "EXPORT_NE_SUPPORT_RATES";

    public static final boolean DEFAULT_EXPORT_SDH_NE_SUPPORT_RATES = false;

    public static final String EXPORT_SBN_SUPPORT_RATES = "EXPORT_SBN_SUPPORT_RATES";

    public static final boolean DEFAULT_EXPORT_SBN_SUPPORT_RATES = false;

    public static final String EXPORT_NOT_EQUIPPED_CTP = "EXPORT_NOT_EQUIPPED_CTP";

    public static final boolean DEFAULT_EXPORT_NOT_EQUIPPED_CTP = true;

    public static final String AS_GATEWAY_CONF_FILE = "AS_GATEWAY_CONF_FILE";

    public static final String OID_FDN_CONF_FILE = "OID_FDN_CONF_FILE";

    public static final String OID_Q3MOI_CONF_FILE = "OID_Q3MOI_CONF_FILE";

    public static final String CSG_EMLVIEW_NAME_PATTERN = "CSG_EMLVIEW_NAME_PATTERN";

    public static final String DEFAULT_CSG_EMLVIEW_NAME_PATTERN = "EMLServers/EML_IM_#/SnmpEMLViewServer";

    public static final String NBI_NS_BIND_NAME = "NBI_NS_BIND_NAME";

    public static final String DEFAULT_NBI_NS_BIND_NAME = "alu/nbi/EmsSessionFactory_I";

    public static final String UFL_RULE_FILE = "UFL_RULE_FILE";

    public static final String DEFAULT_UFL_RULE_FILE = "conf/ufl_rules.cfg";

    public static final String UFL_GROUPS = "UFL_GROUPS";

    public static final String DEFAULT_UFL_GROUPS = "FDNTOUL";

    public static final String EMLVIEW_HEART_BEAT_INTERVAL = "EMLVIEW_HEART_BEAT_INTERVAL";

    public static final int DEFAULT_EMLVIEW_HEART_BEAT_INTERVAL = 120 * 1000;

    public static final String OBJ_CREATION_WAIT_TIME = "OBJ_CREATION_WAIT_TIME";

    public static final String FULL_ENTITY_FOR_OC = "FULL_ENTITY_FOR_OC";

    public static final boolean DEFAULT_FULL_ENTITY_FOR_OC = false;

    public static final String PROCESS_OTU_WITH_ODU = "PROCESS_OTU_WITH_ODU";

    public static final boolean DEFAULT_PROCESS_OTU_WITH_ODU = false;

    public static final String ETH_NE_PM_PARAM_CONF_FILE = "ETH_NE_PM_PARAM_CONF_FILE";

    public static final String NE_PM_PARAM_CONF_FILE = "NE_PM_PARAM_CONF_FILE";

    public static final String ALIGN_TL_RATE_TO_END_OMS_PORT = "ALIGN_TL_RATE_TO_END_OMS_PORT";

    public static final boolean DEFAULT_ALIGN_TL_RATE_TO_END_OMS_PORT = false;

    public static final String PORT_IS_PATH_END = "PORT_IS_PATH_END";

    public static final boolean DEFAULT_PORT_IS_PATH_END = false;

    public static final String ALARM_IS_CLEARABLE = "ALARM_IS_CLEARABLE";

    public static final String ALARM_USE_SEVERITY_CLEARED = "ALARM_USE_SEVERITY_CLEARED";

    public static final boolean DEFAULT_ALARM_IS_CLEARABLE = false;

    public static final String MAP_ALARMID_TO_QUALIFIER = "MAP_ALARMID_TO_QUALIFIER";

    public static final boolean DEFAULT_MAP_ALARMID_TO_QUALIFIER = true;

    public static final String ALARM_PROBOCAUSE_MAP_FILE = "ALARM_PROBOCAUSE_MAP_FILE";

    public static final String SDH_EMLQ3_TP_MAPPING_CONF_FILE = "SDH_EMLQ3_TP_MAPPING_CONF_FILE";

    public static final String EMS_15MIN_PM_HOLDING_TIME = "EMS_15MIN_PM_HOLDING_TIME";

    public static final short DEFAULT_EMS_15MIN_PM_HOLDING_TIME = 10000;

    public static final String PM_PARAMETER_MAP_FILE = "PM_PARAMETER_MAP_FILE";

    public static final String EMS_24H_PM_HOLDING_TIME = "EMS_24H_PM_HOLDING_TIME";

    public static final short DEFAULT_EMS_24H_PM_HOLDING_TIME = 10000;

    public static final String PMDS_CSV_FILE_PATH = "PMDS_CSV_FILE_PATH";

    public static final String PMDS_COMMON_PMFILE_PREFIX = "PMDS_COMMON_PMFILE_PREFIX";

    public static final String PMDS_UNSOLICITED_PMFILE_PREFIX = "PMDS_UNSOLICITED_PMFILE_PREFIX";

    public static final String LOCAL_FTP_ADDRESS = "LOCAL_FTP_ADDRESS";

    public static final String LOCAL_FTP_PORT = "LOCAL_FTP_PORT";

    public static final String LOCAL_FTP_USERNAME = "LOCAL_FTP_USERNAME";

    public static final String LOCAL_FTP_PASSWORD = "LOCAL_FTP_PASSWORD";

    public static final String PM_COLLECTION_PLAN_FILE = "PM_COLLECTION_PLAN_FILE";

    public static final String DEFAULT_PM_COLLECTION_PLAN_FILE = "conf/PMCollectionPlans.xml";

    public static final String ME_PM_CAPABILITIES_FILE = "ME_PM_CAPABILITIES_FILE";

    public static final String TSS5C_E1_PORT_MAP_FILE = "TSS5C_E1_PORT_MAP_FILE";

    public static final String NML_TYPE = "NML_TYPE";

    public static final String DEFAULT_NMS_TYPE = "SDH";

    public static final String PKT_SUBNET_NAME = "PKT_SUBNET_NAME";

    public static final String DEFAULT_PKT_SUBNET_NAME = "PKT";

    public static final String SDH_SUBNET_NAME = "SDH_SUBNET_NAME";

    public static final String DEFAULT_SDH_SUBNET_NAME = "SDH";

    public static final String WDM_SUBNET_NAME = "WDM_SUBNET_NAME";

    public static final String DEFAULT_WDM_SUBNET_NAME = "WDM";

    public static final String FTP_CMD_SCRIPT = "FTP_CMD_SCRIPT";

    public static final String USER_LABEL_AS_TMF_NAME_FOR_PORT = "USER_LABEL_AS_TMF_NAME_FOR_PORT";

    public static final boolean DEFAULT_USER_LABEL_AS_TMF_NAME_PORT = true;

    public static final String INSTALLED_SYSTEMS = "INSTALLED_SYSTEMS";

    public static final String USER_LABEL_AS_TMF_NAME_FOR_TMPLS_CTP = "USER_LABEL_AS_TMF_NAME_FOR_TMPLS_CTP";

    public static final boolean DEFAULT_USER_LABEL_AS_TMF_NAME_TMPLS_CTP = true;

    public static final String SDH_SBNLABEL_AS_TMFNAME = "SDH_SBNLABEL_AS_TMFNAME";

    public static final boolean DEFAULT_SDH_SBNLABEL_AS_TMFNAME = true;

    public static final String BM_SESSION_FACTORY_NSPATH = "BM_SESSION_FACTORY_NSPATH";

    public static final String DEFAULT_BM_SESSION_FACTORY_NSPATH = "alcatel/1354bm/PKT_910_1/core/SessionMgt/SessionFactory";

    public static final String BM_SESSION_USERNAME = "BM_SESSION_USERNAME";

    public static final String DEFAULT_BM_SESSION_USERNAME = "alcatel";

    public static final String BM_SESSION_PASSWORD = "BM_SESSION_PASSWORD";

    public static final String DEFAULT_BM_SESSION_PASSWORD = "alcatel";

    public static final String BM_EVENT_CHANNEL_NSPATH = "BM_EVENT_CHANNEL_NSPATH";

    public static final String DEFAULT_BM_EVENT_CHANNEL_NSPATH = "alcatel/1354bm/PKT_910_1/channels/nbi_channel";

    public static final String TP_TMF_NAME_USE_AS = "TP_TMF_NAME_USE_AS";

    public static final String TP_TMF_NAME_USE_AS_USERLABEL = "USERLABEL";

    public static final String TP_TMF_NAME_USE_AS_FDNMAPPER = "FDNMAPPER";

    public static final String TP_TMF_NAME_USE_AS_ID = "ID";

    public static final String NE_TMF_NAME_USE_AS = "NE_TMF_NAME_USE_AS";

    public static final String NE_TMF_NAME_USE_AS_USERLABEL = "USERLABEL";

    public static final String NE_TMF_NAME_USE_AS_FDNMAPPER = "FDNMAPPER";

    public static final String NE_TMF_NAME_USE_AS_ID = "ID";

    public static final String NE_TMF_NAME_USE_AS_GROUPID = "GROUPID";

    public static final String USE_TECH_SUBNETWORK = "USE_TECH_SUBNETWORK";

    public static final boolean DEFAULT_USE_TECH_SUBNETWORK = true;

    public static final String NR_VER = "NR_VER";

    public static final String DEFAULT_NR_VER = "NR9.4";

    public static final String TOP_SUBNET_NAME = "TOP_SUBNET_NAME";

    public static final String DEFAULT_TOP_SUBNET_NAME = "DEFAULT PHYSICAL";

    public static final String TP_CONTAIN_EML_ATTR = "TP_CONTAIN_EML_ATTR";

    public static final boolean DEFAULT_TP_CONTAIN_EML_ATTR = false;

    public static final String ALARM_PROCESS_THREAD_NUMBER = "ALARM_PROCESS_THREAD_NUMBER";

    public static final int DEFAULT_ALARM_PROCESS_THREAD_NUMBER = 4;

    public static final String PM_PLAN_DELAY_TIME = "PM_PLAN_DELAY_TIME";

    public static final int DEFAULT_PM_PLAN_DELAY_TIME = 3 * 60 * 60;

    public static final String EMLTP_ATTR_CONF_FILE = "EMLTP_ATTR_CONF_FILE";

    // public static final String EMLTP_ATTR_CONF_FILE = "EMLTP_ATTR_CONF_FILE";

    public static final String EXPORT_TD_CP = "EXPORT_TD_CP";

    public static final boolean DEFAULT_EXPORT_TD_CP = true; // false

    public static final String EXPORT_PHB_VT_VTQ = "EXPORT_PHB_VT_VTQ";

    public static final boolean DEFAULT_EXPORT_PHB_VT_VTQ = true; // false

    public static final String CESVLANPATHID_EQUAL_CESTLID = "CESVLANPATHID_EQUAL_CESTLID";

    public static final boolean DEFAULT_CESVLANPATHID_EQUAL_CESTLID = true;

    public static final String PKT_VERSION = "PKT_VERSION";

    public static final String DEFAULT_PKT_VERSION = "9.1.1.4";

    public static final String PKT_VERSION_MAP_FILE = "PKT_VERSION_MAP_FILE";

    public static final String UTC_TIME_FORMAT = "UTC_TIME_FORMAT";

    public static final boolean DEFAULT_UTC_TIME_FORMAT = true;

    public static final String EQU_ALARM_CONF_FILE = "EQU_ALARM_CONF_FILE";

    public static final String EQU_RI_CONF_FILE = "EQU_RI_CONF_FILE";

    public static final String SET_EMS_TIME_SCRIPT = "SET_EMS_TIME_SCRIPT";

    public static final String MEMCACHED_HOST = "MEMCACHED_HOST";

    public static final String DEFAULT_MEMCACHED_HOST = "localhost";

    public static final String MEMCACHED_PORT = "MEMCACHED_PORT";

    public static final String CTP_QUERY_BY_WDM_API = "CTP_QUERY_BY_WDM_API";

    public static final String DEFAULT_CTP_QUERY_BY_WDM_API = "FALSE";

    public static final String CACHE_ALARM_NUM = "CACHE_ALARM_NUM";

    public static final int DEFAULT_CACHE_ALARM_NUM = 10000;

    public static final String EXPORT_DEFPHYSICAL_SUBNETWORK = "EXPORT_DEFPHYSICAL_SUBNETWORK";

    public static final boolean DEFAULTEXPORT_DEFPHYSICAL_SUBNETWORK = false;

    public static final String EXPORT_TOPTL = "EXPORT_TOPTL";

    public static final boolean DEFAULT_EXPORT_TOPTL = false;

    public static final String PM_RESULT_FOLDER = "PM_RESULT_FOLDER";

    public static final String PM_FTP_CONTR_HOME = "PM_FTP_CONTR_HOME";

    public static final String DEFAULT_PM_RESULT_FOLDER = "";

    public static final String PM_RESULT_FILE = "PM_RESULT_FILE";

    public static final String DEFAULT_PM_RESULT_FILE = "";

    public static final String PM_FTP_USER = "PM_FTP_USER";

    public static final String PM_FTP_PASSWORD = "PM_FTP_PASSWORD";

    public static final String PM_HISTORY_FLAG = "PM_HISTORY_FLAG";

    public static final boolean DEFAULT_PM_HISTORY_FLAG = false;

    public static final String PM_SFTP_ENABLED = "PM_SFTP_ENABLED";

    public static final boolean DEFAULT_PM_SFTP_ENABLED = false;

    public static final String EML_GATEWAY_NS_NAMES_PATH = "EML_GATEWAY_NS_NAMES_PATH";

    public static final String CPM_GATEWAY_NS_NAMES_PATH = "CPM_GATEWAY_NS_NAMES_PATH";

    public static final String CPM_WDM_EVENT_CHANNEL_PATH = "CPM_WDM_EVENT_CHANNEL_PATH";

    public static final String CPM_HISTORY_WAIT_TIME = "CPM_HISTORY_WAIT_TIME";

    public static final String WDM_SBN_SUPPORT_RATES = "WDM_SBN_SUPPORT_RATES";

    public static final String PKT_SBN_SUPPORT_RATES = "PKT_SBN_SUPPORT_RATES";

    public static final String SDH_SBN_SUPPORT_RATES = "SDH_SBN_SUPPORT_RATES";

    public static final String NPR_INSTALLED = "NPR_INSTALLED";

    public static final boolean DEFAULT_NPR_INSTALLED = true;

    public static final String DO_TMF_LOG = "DO_TMF_LOG";

    public static final boolean DEFAULT_DO_TMF_LOG = false;

    public static final String PSS_ASON_INSTALLED = "PSS_ASON_INSTALLED";

    public static final boolean DEFAULT_PSS_ASON_INSTALLED = false;

    public static final String EXPORT_UNIMPLEMENTED_ASON_TRAIL_ROUTE = "EXPORT_UNIMPLEMENTED_ASON_TRAIL_ROUTE";

    public static final boolean DEFAULT_EXPORT_UNIMPLEMENTED_ASON_TRAIL_ROUTE = false;

    public static final String EXPORT_NOT_MANAGED_TL_BY_WDM = "EXPORT_NOT_MANAGED_TL_BY_WDM";

    public static final boolean DEFAULT_EXPORT_NOT_MANAGED_TL_BY_WDM = false;

    public static final String EXPORT_ALL_ROUTE = "EXPORT_ALL_ROUTE";

    public static final boolean DEFAULT_EXPORT_ALL_ROUTE = true;

    public static final String MAP_PSS64_ODUPLANE_BYSDH = "MAP_PSS64_ODUPLANE_BYSDH";

    public static final boolean DEFAULT_MAP_PSS64_ODUPLANE_BYSDH = true;

    public static final String DEL_1830PSS_INTERNAL_CROSS = "DEL_1830PSS_INTERNAL_CROSS";

    public static final boolean DEFAULT_DEL_1830PSS_INTERNAL_CROSS = true;

    public static final String EXPORT_MAINROUTE_IN_GETBACKUPROUTE = "EXPORT_MAINROUTE_IN_GETBACKUPROUTE";

    public static final boolean DEFAULT_EXPORT_MAINROUTE_IN_GETBACKUPROUTE = false;

    public static final String TPNAME_FDNMAPPER_1626LM = "TPNAME_FDNMAPPER_1626LM";

    public static final boolean DEF_TPNAME_FDNMAPPER_1626LM = true;

    public static final String TMF_XMLBEANS_CONF = "TMF_XMLBEANS_CONF";

    public static final String EXPORT_MAP_SUBNETWORK = "EXPORT_MAP_SUBNETWORK";

    public static final boolean DEFAULT_EXPORT_MAP_SUBNETWORK = false;

    public static final String ALARM_SERVICE_AFFECTING = "ALARM_SERVICE_AFFECTING";

    public static final boolean DEFAULT_ALARM_SERVICE_AFFECTING = false;

    public static final String HOLDER_PREFIX_ENABLE = "HOLDER_PREFIX_ENABLE";

    public static final String PHYSICAL_LOCATION = "PHYSICAL_LOCATION";

    public static final String EQU_TYPE_MAP_FILE = "EQU_TYPE_MAP_FILE";

    public static final String REG_TYPE = "REG_TYPE";

    public static final String DEFAULT_REG_TYPE = "3R";

    public static final String USE_OCHCTP_AS_OTUk_TRAIL_ENDPOINT = "USE_OCHCTP_AS_OTUk_TRAIL_ENDPOINT";

    public static final boolean DEFAULT_USE_OCHCTP_AS_OTUk_TRAIL_ENDPOINT = false;

    public static final String USE_MEMORY_ITERATOR = "USE_MEMORY_ITERATOR";

    public static final boolean DEFAULT_USE_MEMORY_ITERATOR = false;

    public static final String CONVERT_TPNAME_TO_TMFNAME = "CONVERT_TPNAME_TO_TMFNAME";

    public static final String NEED_OPERATE_SNC_TABLE = "NEED_OPERATE_SNC_TABLE";

    public static final boolean DEFAULT_NEED_OPERATE_SNC_TABLE = false;

    public static final boolean DEFAULT_CONVERT_TPNAME_TO_TMFNAME = true;

    public static final String TMF_REVERSION_MODE_FLAG = "TMF_REVERSION_MODE_FLAG";

    public static final String TMF_WAIT_TO_RESTORE_TIME = "TMF_WAIT_TO_RESTORE_TIME";

    public static final String DEFAULT_TMF_WAIT_TO_RESTORE_TIME = "-1";

    public static final String QOSALARM_TO_TCA = "QOSALARM_TO_TCA";

    public static final boolean DEF_QOSALARM_TO_TCA = true;

    public static final String PURE_OTN_NETWORK = "PURE_OTN_NETWORK";

    public static final boolean DEFAULT_PURE_OTN_NETWORK = true;

    public static final String CC_OPERATION_DELAY_SECOND = "CC_OPERATION_DELAY_SECOND";

    public static final String WDM_ADAPTER_OTN_TEST = "WDM_ADAPTER_OTN_TEST";

    public static final boolean DEF_WDM_ADAPTER_OTN_TEST = false;

    public static final String EMLDBIP = "EMLDBIP";

    public static final String SDHDBIP = "SDHDBIP";

    public static final String WDMDBIP = "WDMDBIP";

    public static final String MONITORADDRESS = "MONITORADDRESS";

    public static final String NBI_BACK_DOOR_PORT = "NBI_BACK_DOOR_PORT";

    public static final int DEF_NBI_BACK_DOOR_PORT = 27654;
}
