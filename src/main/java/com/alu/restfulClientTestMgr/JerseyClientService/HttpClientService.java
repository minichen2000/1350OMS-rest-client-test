package com.alu.restfulClientTestMgr.JerseyClientService;

import org.apache.log4j.Logger;
import org.glassfish.jersey.apache.connector.ApacheConnectorProvider;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.jetty.connector.JettyConnectorProvider;
import org.glassfish.jersey.logging.LoggingFeature;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import java.net.CookieStore;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
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
        ClientConfig clientConfig = new ClientConfig();
        clientConfig.connectorProvider(new ApacheConnectorProvider());
        clientConfig.property(LoggingFeature.LOGGING_FEATURE_VERBOSITY_CLIENT, LoggingFeature.Verbosity.PAYLOAD_ANY);

        try {
            httpClient = ClientHelper.getClient(clientConfig);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            httpClient=null;
        } catch (KeyManagementException e) {
            e.printStackTrace();
            httpClient=null;
        }

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
