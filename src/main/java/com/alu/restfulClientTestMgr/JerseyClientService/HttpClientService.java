package com.alu.restfulClientTestMgr.JerseyClientService;

import org.apache.log4j.Logger;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.jetty.connector.JettyConnectorProvider;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import java.net.CookieStore;
import java.security.KeyManagementException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

public class HttpClientService
{

    private static Logger log = Logger.getLogger( HttpClientService.class );

    private static HttpClientService inst_ = null;

    private Client httpClient = null;

    public Client getHttpClient()
    {
        return httpClient;
    }

    void init()
    {
        SSLContext sslContext = null;
        try {
            sslContext = SSLContext.getInstance( "TLS" );
        } catch (Exception e) {
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
            sslContext.init( null, new TrustManager[] {tm}, null);
        } catch (KeyManagementException e) {
            e.printStackTrace();
        }

        ClientConfig clientConfig = new ClientConfig();
        clientConfig.connectorProvider(new JettyConnectorProvider());

        httpClient = ClientBuilder.newBuilder().sslContext(sslContext).newClient(clientConfig);

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
