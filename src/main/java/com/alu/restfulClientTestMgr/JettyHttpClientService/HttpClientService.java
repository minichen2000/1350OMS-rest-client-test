package com.alu.restfulClientTestMgr.JettyHttpClientService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.eclipse.jetty.client.HttpClient;
import org.eclipse.jetty.util.HttpCookieStore;
import org.eclipse.jetty.util.ssl.SslContextFactory;

import java.net.CookieStore;

public class HttpClientService
{

    private static Logger log = LogManager.getLogger( HttpClientService.class );

    private static HttpClientService inst_ = null;

    private HttpClient httpClient = null;

    private CookieStore cookieStore = null;

    public HttpClient getHttpClient()
    {
        return httpClient;
    }

    public CookieStore getCookieStore()
    {
        return cookieStore;
    }

    public void newClient()
    {

        SslContextFactory sf = new SslContextFactory(true);

        /*SSLContext sslContext = null;
        try {
            sslContext = SSLContext.getInstance( "TLS" );
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        X509TrustManager tm = new X509TrustManager()
        {
            @Override
            public void checkClientTrusted( X509Certificate[] chain,
                                            String authType ) throws CertificateException
            {
                // TODO Auto-generated method stub

            }

            @Override
            public void checkServerTrusted( X509Certificate[] chain,
                                            String authType ) throws CertificateException
            {
                // TODO Auto-generated method stub

            }

            @Override
            public X509Certificate[] getAcceptedIssuers()
            {
                // TODO Auto-generated method stub
                return null;
            }
        };
        try {
            sslContext.newClient( null, new TrustManager[] {tm}, null );
        } catch (KeyManagementException e) {
            e.printStackTrace();
        }
        sf.setSslContext(sslContext);*/


        httpClient=new HttpClient(sf);
        httpClient.setFollowRedirects(false);
        cookieStore=new HttpCookieStore();
        httpClient.setCookieStore(cookieStore);
        try {
            httpClient.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void closeClient(){
        if(null!=httpClient){
            try {
                httpClient.stop();
            } catch (Exception e) {
                e.printStackTrace();
            }
            httpClient=null;
        }
    }

    public static HttpClientService instance()
    {
        if( null==inst_ ){
            inst_ = new HttpClientService();
        }
        if(null==inst_.httpClient){
            inst_.newClient();
        }
        return inst_;
    }

    private HttpClientService()
    {
    }

}
