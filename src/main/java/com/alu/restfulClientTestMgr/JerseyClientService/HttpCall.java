package com.alu.restfulClientTestMgr.JerseyClientService;


import org.apache.log4j.Logger;


import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.Response;
import java.util.Map;

public class HttpCall
{
    private static Logger log = Logger.getLogger( HttpCall.class );

    private HttpCall()
    {

    }

    private static HttpCall inst = new HttpCall();

    public static HttpCall instance()
    {
        return inst;
    }


    private String sendRequest(Invocation.Builder ib, String method, Entity entity){
        Response resp=null;
        log.debug("ib:"+ib.toString());
        if(null!=entity){
            resp=ib.method(method, entity);
        }else{
            resp=ib.method(method);
        }
        try
        {
            if( resp.getStatus() != 201
                    && resp.getStatus() != 200 )
            {
                log.error( "HTTP ERROR CODE :" + resp.getStatus());
                return "";
            }else{
                return resp.readEntity(String.class);
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

        WebTarget wt=HttpClientService.instance().getHttpClient().target(url);
        Invocation.Builder ib=null;
        if(null!=contentType && !contentType.isEmpty()){
            ib=wt.request(contentType);
        }else{
            ib=wt.request();
        }
        return sendRequest(ib, "get", null);


    }

    public synchronized String postCall( String url, String inputParam, String contentType, String acceptContentType,
            Map<String, String> addRequestHeader )
    {
        log.debug( "Post Rest URL = " + url );

        WebTarget wt=HttpClientService.instance().getHttpClient().target(url);
        Invocation.Builder ib=null;
        if(null!=acceptContentType && !acceptContentType.isEmpty()){
            ib=wt.request(acceptContentType);
        }else{
            ib=wt.request();
        }

        Entity entity=null;
        /*
        if(null!=inputParam && !inputParam.isEmpty()){
            entity=Entity.entity(inputParam, contentType);
        }*/
        if(null!=inputParam && !inputParam.isEmpty()){
            Form form=new Form();
            form.param("username", "alcatel");
            form.param("password", "Lucent2.@");
            entity=Entity.entity(form, contentType);
        }
        return sendRequest(ib, "post", entity);

    }


    public synchronized String deleteCall( String url)
    {
        log.debug( "Delete Rest URL = " + url );
        WebTarget target=HttpClientService.instance().getHttpClient().target(url);
        Invocation.Builder ib=target.request();
        return sendRequest(ib, "delete", null);

    }
}
