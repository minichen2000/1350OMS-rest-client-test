package com.alu.restfulClientTestMgr.OmsClient;

import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.http.client.CookieStore;
import org.apache.http.client.protocol.ClientContext;
import org.apache.http.conn.scheme.Scheme;
import org.apache.http.conn.ssl.SSLSocketFactory;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;
import org.apache.log4j.Logger;

public class HttpClientService
{

    private static Logger log = Logger.getLogger( HttpClientService.class );

    private static HttpClientService inst_ = null;

    // DefaultHttpClient httpClient = new DefaultHttpClient();
    private DefaultHttpClient httpClient = new DefaultHttpClient();

    private CookieStore cookieStore = new BasicCookieStore();

    private HttpContext httpContext = new BasicHttpContext();

    public DefaultHttpClient getHttpClient()
    {
        return httpClient;
    }

    public HttpContext getHttpContext()
    {
        return httpContext;
    }

    public CookieStore getCookieStore()
    {
        return cookieStore;
    }

    void init()
    {
        SSLSocketFactory sf = null;
        SSLContext sslContext = null;
        try
        {
            sslContext = SSLContext.getInstance( "TLS" );
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
            sslContext.init( null, new TrustManager[] {tm}, null );
            // sslContext.init(null, null, null);
        }
        catch( NoSuchAlgorithmException e )
        {
            // <YourErrorHandling>
        }
        catch( KeyManagementException e )
        {
            // <YourErrorHandling>
        }
        try
        {
            sf = new SSLSocketFactory( sslContext,
                    SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER );
        }
        catch( Exception e )
        {
            // <YourErrorHandling>
        }
        Scheme scheme = new Scheme( "https", 443, sf );
        httpClient.getConnectionManager().getSchemeRegistry().register( scheme );
        // CookieStore cookieStore = new BasicCookieStore();
        // HttpContext httpContext = new BasicHttpContext();
        httpContext.setAttribute( ClientContext.COOKIE_STORE, cookieStore );
    }

    public static HttpClientService instance()
    {
        if( inst_ == null )
        {
            inst_ = new HttpClientService();
            inst_.init();
        }
        return inst_;
    }

    private HttpClientService()
    {
    }

}
