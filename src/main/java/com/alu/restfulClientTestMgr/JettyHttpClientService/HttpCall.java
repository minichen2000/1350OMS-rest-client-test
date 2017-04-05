package com.alu.restfulClientTestMgr.JettyHttpClientService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.eclipse.jetty.client.api.ContentResponse;
import org.eclipse.jetty.client.api.Request;
import org.eclipse.jetty.client.util.StringContentProvider;
import org.eclipse.jetty.http.HttpMethod;

import java.util.Map;

public class HttpCall
{
    private static Logger log = LogManager.getLogger( HttpCall.class );

    private HttpCall()
    {

    }

    private static HttpCall inst = new HttpCall();

    public static HttpCall instance()
    {
        return inst;
    }


    private String sendRequest(Request req){
        try
        {
            ContentResponse resp=req.send();

            log.debug("resp Headers: \n"+resp.getHeaders());

            if( resp.getStatus() != 201
                    && resp.getStatus() != 200 )
            {
                log.error( "HTTP ERROR CODE :" + resp.getStatus());
                System.out.println( "HTTP ERROR CODE :" + resp.getStatus());
                return "";
            }else{
                byte[] buf=resp.getContent();
                String rlt=resp.getContentAsString();
                log.debug("EC: "+resp.getEncoding()+" MT: "+resp.getMediaType()+" byte len: "+buf.length);
                return rlt;
            }
        }
        catch( Exception e )
        {
            log.error( e );
            return null;
        }
    }

    public synchronized String getCall( String url, String contentType )
    {
        log.debug( "Get Rest URL = " + url );
        Request req=HttpClientService.instance().getHttpClient().newRequest(url).method(HttpMethod.GET);

        if( contentType != null && !contentType.isEmpty() )
            req.header( "Accept", contentType );

        log.debug("getHeaders: \n"+req.getHeaders());
        return sendRequest(req);


    }

    public synchronized String postCall( String url, String inputParam, String contentType, String acceptContentType,
            Map<String, String> addRequestHeader )
    {
        log.debug( "Post Rest URL = " + url );
        Request req=HttpClientService.instance().getHttpClient().newRequest(url).method(HttpMethod.POST);
        if(null!=inputParam && !inputParam.isEmpty()){
            req.content(new StringContentProvider(inputParam), contentType);
        }
        if(null!=acceptContentType && acceptContentType.length()>0){
            req.header("Accept", acceptContentType);
        }
        log.debug("getHeaders: \n"+req.getHeaders());


        return sendRequest(req);

    }


    public synchronized String deleteCall( String url)
    {
        log.debug( "Delete Rest URL = " + url );
        Request req=HttpClientService.instance().getHttpClient().newRequest(url).method(HttpMethod.DELETE);
        log.debug("getHeaders: \n"+req.getHeaders());
        return sendRequest(req);

    }
}
