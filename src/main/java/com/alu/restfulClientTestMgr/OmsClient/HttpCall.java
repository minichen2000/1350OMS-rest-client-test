package com.alu.restfulClientTestMgr.OmsClient;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Map;

import org.apache.http.Header;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;

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

    public synchronized String getCall( String url, String contentType )
    {
        log.debug( "Get Rest URL = " + url );
        HttpGet getRequest = new HttpGet( url );
        if( contentType != null && !contentType.isEmpty() )
            getRequest.addHeader( "Accept", contentType );
        StringBuilder sb = new StringBuilder();

        try
        {
            HttpResponse response = HttpClientService
                    .instance()
                    .getHttpClient()
                    .execute( getRequest,
                        HttpClientService.instance().getHttpContext() );

            if( response.getStatusLine().getStatusCode() != 201
                    && response.getStatusLine().getStatusCode() != 200 )
            {
            	EntityUtils.consume(response.getEntity());
                log.error( "HTTP ERROR CODE :"
                        + response.getStatusLine().getStatusCode() );
                /*throw new NbiException( NbiExceptionType.EXCPT_INTERNAL_ERROR,
                        "HTTP ERROR CODE :"
                                + response.getStatusLine().getStatusCode() );*/
                return "";
            }
            BufferedReader br = new BufferedReader( new InputStreamReader(
                    (response.getEntity().getContent()) ) );

            if(null!=br){
                String output;
                while( (output = br.readLine()) != null )
                {
                    sb.append( output + "\n" );
                }
            }

            return sb.toString();
        }
        catch( Exception e )
        {
            log.error( e );
            return null;
            /*throw ExceptionConverter.convertToInternalException( e );*/
        }

    }

    public synchronized String postCall( String url, String inputParam, String contentType, String acceptContentType,
            Map<String, String> addRequestHeader )
    {
        log.debug( "Post Rest URL = " + url );
        HttpPost postRequest = new HttpPost( url );
        StringBuilder sb = new StringBuilder();
        try
        {
            StringEntity input = new StringEntity( inputParam );
            input.setContentType( contentType );
            if( addRequestHeader != null )
                for( String paramKey : addRequestHeader.keySet() )
                {
                    String paramValue = addRequestHeader.get( paramKey );
                    postRequest.setHeader( paramKey, paramValue );
                }
            if(null!=acceptContentType && acceptContentType.length()>0){
                postRequest.addHeader("Accept", acceptContentType);
            }

            postRequest.setEntity( input );
            log.debug("getContentType: "+input.getContentType());
            log.debug("getContentEncoding: "+input.getContentEncoding());
            log.debug("getContentLength: "+input.getContentLength());
            for(Header h : postRequest.getAllHeaders()){
                log.debug("Head:  "+h.toString());
            }


            HttpResponse response = HttpClientService
                    .instance()
                    .getHttpClient()
                    .execute( postRequest,
                        HttpClientService.instance().getHttpContext() );
            if( response.getStatusLine().getStatusCode() != 201
                    && response.getStatusLine().getStatusCode() != 200 )
            {
            	EntityUtils.consume(response.getEntity());
                log.error("HTTP ERROR CODE :"
                        + response.toString());
                /*throw new NbiException( NbiExceptionType.EXCPT_INTERNAL_ERROR,
                        "HTTP ERROR CODE :"
                                + response.getStatusLine().getStatusCode() );*/
                return null;
            }
            BufferedReader br = new BufferedReader( new InputStreamReader(
                    (response.getEntity().getContent()) ) );

            if(null!=br){
                String output;
                while( (output = br.readLine()) != null )
                {
                    sb.append( output + "\n" );
                }
            }

            return sb.toString();

        }
        catch( Exception e )
        {
            log.error( e );
            //throw ExceptionConverter.convertToInternalException( e );
            return null;
        }

    }


    public synchronized String deleteCall( String url)
    {
        log.debug( "Delete Rest URL = " + url );
        HttpDelete deleteRequest = new HttpDelete(url);
        StringBuilder sb = new StringBuilder();
        try
        {
            HttpResponse response = HttpClientService
                    .instance()
                    .getHttpClient()
                    .execute( deleteRequest,
                            HttpClientService.instance().getHttpContext() );
            if( response.getStatusLine().getStatusCode() != 201
                    && response.getStatusLine().getStatusCode() != 200 )
            {
                EntityUtils.consume(response.getEntity());
                log.error("HTTP ERROR CODE :"
                        + response.getStatusLine().getStatusCode() );
                /*throw new NbiException( NbiExceptionType.EXCPT_INTERNAL_ERROR,
                        "HTTP ERROR CODE :"
                                + response.getStatusLine().getStatusCode() );*/
                return null;
            }
            BufferedReader br = new BufferedReader( new InputStreamReader(
                    (response.getEntity().getContent()) ) );
            if(null!=br){
                String output;
                while( (output = br.readLine()) != null )
                {
                    sb.append( output + "\n" );
                }
            }

            return sb.toString();

        }
        catch( Exception e )
        {
            log.error( e );
            //throw ExceptionConverter.convertToInternalException( e );
            return null;
        }

    }
}
