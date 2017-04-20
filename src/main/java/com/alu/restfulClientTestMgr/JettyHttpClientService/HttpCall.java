package com.alu.restfulClientTestMgr.JettyHttpClientService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.eclipse.jetty.client.api.ContentProvider;
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
            log.info("req: "+req.toString());
            log.info("req.getHost: "+req.getHost());
            log.info("req.getPort: "+req.getPort());
            log.info("req.getPath: "+req.getPath());
            log.info("req.getHeaders: "+req.getHeaders().toString());
            ContentResponse resp=req.send();

            log.info("resp Headers: \n"+resp.getHeaders());

            if( resp.getStatus() != 201
                    && resp.getStatus() != 200 )
            {
                log.error( "HTTP ERROR CODE :" + resp.getStatus());
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
        Request req=HttpClientService.instance().getHttpClient().newRequest(url).method(HttpMethod.GET);

        if( contentType != null && !contentType.isEmpty() )
            req.header( "Accept", contentType );

        return sendRequest(req);


    }

    public synchronized String postCall( String url, String inputParam, String contentType, String acceptContentType)
    {
        Request req=HttpClientService.instance().getHttpClient().newRequest(url).method(HttpMethod.POST);
        if(null!=inputParam && !inputParam.isEmpty()){
            req.content(new StringContentProvider(inputParam), contentType);
        }
        if(null!=acceptContentType && acceptContentType.length()>0){
            req.header("Accept", acceptContentType);
        }


        return sendRequest(req);

    }

    public synchronized String putCall( String url, String inputParam, String contentType, String acceptContentType)
    {
        Request req=HttpClientService.instance().getHttpClient().newRequest(url).method(HttpMethod.PUT);
        if(null!=inputParam && !inputParam.isEmpty()){
            req.content(new StringContentProvider(inputParam), contentType);
        }
        if(null!=acceptContentType && acceptContentType.length()>0){
            req.header("Accept", acceptContentType);
        }
        log.info("PUT content:\n"+inputParam);


        return sendRequest(req);

    }


    public synchronized String deleteCall( String url)
    {
        Request req=HttpClientService.instance().getHttpClient().newRequest(url).method(HttpMethod.DELETE);
        return sendRequest(req);

    }
}
