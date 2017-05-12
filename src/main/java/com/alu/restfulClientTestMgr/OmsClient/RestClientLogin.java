package com.alu.restfulClientTestMgr.OmsClient;

import com.alu.restfulClientTestMgr.JettyHttpClientService.HttpCall;
import com.alu.restfulClientTestMgr.constants.ConfLoader;
import com.alu.restfulClientTestMgr.constants.ConfLoaderException;
import com.alu.restfulClientTestMgr.exception.OmsRestClientException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;


public class RestClientLogin
{
    private static Logger log = LogManager.getLogger( RestClientLogin.class );

    public void login() throws OmsRestClientException, ConfLoaderException {
        String otnIp = ConfLoader.getInstance().getConf( "otnip");
        int otnPort = ConfLoader.getInstance().getInt( "otnport",
            RestFulConstant.OTNPORT );
        String casIp = ConfLoader.getInstance().getConf( "casip");
        int casPort = ConfLoader.getInstance().getInt( "casport",
            RestFulConstant.OTNPORT );
        String casUrl = ConfLoader.getInstance().getConf( "casurl");
        String presentationIp = ConfLoader.getInstance().getConf("presentationip");
        String userName = ConfLoader.getInstance().getConf( "guiusername");
        String password = ConfLoader.getInstance().getConf( "guipassword");

        String omsUrl = ConfLoader.getInstance().getConf( "omsurl");

        String tgTid = getTgtIdFromCas( casIp, casPort, casUrl, userName,
            password );

        String serviceTicket = getServiceTicketFromCas( casIp, casPort, casUrl,
            tgTid.trim(), otnIp, otnPort );
        authenticateOMS( casIp, casPort, serviceTicket.trim(), userName,
            password, presentationIp, otnIp, otnPort, omsUrl );

        if( ConfLoader.getInstance().getBoolean("sessioninfo", false)){
            getSessionInfo(otnIp, otnPort);
        }


        getNodeInfo( otnIp, otnPort );
    }

    private String getTgtIdFromCas( String casIP, int casPort, String casUrl,
            String casUserName, String casPassword )
    {
        log.info( "================getTgtIdFromCas================" );
        String url = "https://" + casIP + ":" + casPort + casUrl;
        log.info( "CAS URL = " + url );
        String inputparam = "username=" + casUserName + "&password="
                + casPassword;
        log.info( "CAS data = " + inputparam );

        String output = HttpCall.instance().postCall( url, inputparam,
            "application/x-www-form-urlencoded",null);
        log.info( "Data Received = " + output );

        Document htmlFile = null;
        try
        {
            htmlFile = Jsoup.parse( output );
            String title = htmlFile.title();
            log.info( "title : " + title );
            Elements links = htmlFile.select( "form" );
            log.info( "\nlink : " + links.attr( "action" ) );
            log.info( "\nlink : " + links.attr( "method" ) );
            String recvtgtString = links.attr( "action" );
            String[] tgtstringArr = recvtgtString.split( "/" );
            String tgtIdStr = tgtstringArr[tgtstringArr.length - 1];
            log.info( "TGT String : " + tgtIdStr );
            return tgtIdStr;
        }
        catch( Exception e )
        { // TODO Auto-generated catch block
            log.error( e );
            return null;
            //throw ExceptionConverter.convertToInternalException( e );
        } //

    }

    private String getServiceTicketFromCas( String casIP, int casPort,
            String casUrl, String casTgtId, String otnIP, int otnPort )

    {
        log.info( "================getServiceTicketFromCas================" );
        String url = "https://" + casIP + ":" + casPort + casUrl + "/"
                + casTgtId;
        log.info( "CAS Service Ticket URL = " + url );
        String inputParam = "service=https://" + otnIP + ":" + otnPort
                + "/oms1350";
        log.info( "CAS Service inputParam = " + inputParam );

        String serviceTicket = HttpCall.instance().postCall( url, inputParam,
            "application/x-www-form-urlencoded",null);

        log.info( "serviceTicket String : " + serviceTicket );
        return serviceTicket;
    }

    private void authenticateOMS( String casIP, int casPort,
            String serviceTicket, String userName, String password,
            String presenIP, String otnIP, int otnPort, String omsUrl )
    {
        log.info( "================authenticateOMS================" );
        String url = "https://" + otnIP + ":" + otnPort + omsUrl;
        log.info( "URL OMS = " + url );
        String inputParam = "user=alcatel&password=Lucent1.!&presentation="
                + presenIP + "&ticket=" + serviceTicket.trim();
        log.info( "CAS Service inputParam = " + inputParam );

        String rlt=HttpCall.instance().postCall( url, inputParam,
            "application/x-www-form-urlencoded", null);
        log.info( "authenticateOMS rlt : " + rlt );
    }

    private void getSessionInfo(String otnIP, int otnPort)
    {
        log.info( "================getSessionInfo================" );
        String url = "https://" + otnIP + ":" + otnPort + RestFulConstant.SESSION_INFO_URL;
        log.info( "URL getSessionInfo = " + url );
        String rlt=HttpCall.instance().getCall( url, null);
        log.info( "getSessionInfo rlt : " + rlt );
    }

    public void getNodeInfo( String otnIP, int otnPort )
    {
        // TODO Auto-generated method stub
        log.info( "Exceuting getNodeInfo" );
        String url = "https://" + otnIP + ":" + otnPort
                + "/oms1350/nodeCache/nodes";
        String contentType = "";
        String rlt=HttpCall.instance().getCall( url, contentType );
        log.info( "getNodeInfo rlt : " + rlt );
    }
}
