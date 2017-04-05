package com.alu.restfulClientTestMgr;

import com.alu.restfulClientTestMgr.constants.ConfLoader;
import com.alu.restfulClientTestMgr.constants.ConfigKey;
import com.alu.restfulClientTestMgr.exception.OmsRestClientException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.LoggerContext;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;
import org.eclipse.jetty.websocket.jsr356.server.deploy.WebSocketServerContainerInitializer;

import javax.servlet.ServletException;
import java.net.URISyntaxException;
import java.net.URL;

/**
 * Created by chenmin on 2017/3/30.
 */
public class Main {
    private static Logger log;
    public static void main(String[] args){

        String confPath = loadConf();

        System.setProperty("log4j.configurationFile", confPath + "/"+ConfLoader.getInstance().getConf(ConfigKey.LOG_CONF_FILE_NAME, ConfigKey.DEFAULT_LOG_CONF_FILE_NAME));
        LoggerContext loggerContext = (LoggerContext) LogManager.getContext(false);
        loggerContext.reconfigure();

        log = LogManager.getLogger(Main.class);

        configProxy();

        //webapp context
        WebAppContext webAppContext = new WebAppContext();
        webAppContext.setContextPath("/");
        webAppContext.setDescriptor("webapp" + "/WEB-INF/web.xml");

        URL webAppDir = Thread.currentThread().getContextClassLoader().getResource("webapp");
        if (webAppDir == null) {
            throw new RuntimeException(String.format("No %s directory was found into the JAR file", "webapp"));
        }
        try {
            log.debug("webAppDir: "+webAppDir.toString());
            log.debug("webAppContext.setResourceBase: "+webAppDir.toURI().toString());
            webAppContext.setResourceBase(webAppDir.toURI().toString());
            webAppContext.setParentLoaderPriority(true);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        ////////////////////////

        final int port = ConfLoader.getInstance().getInt(ConfigKey.SERVER_PORT, ConfigKey.DEFAULT_SERVER_PORT);
        final Server server = new Server(port);
        server.setHandler(webAppContext);

        //if you have Websocket Servlet in your web.xml you should add below lines to initialize it.
        try {
            WebSocketServerContainerInitializer.configureContext(webAppContext);
        } catch (ServletException e) {
            log.info("WebSocketServerContainerInitializer.configureContext failed.", e);
            shutDown();
        }


        new Thread(new Runnable() {

            @Override
            public void run() {
                try {
                    try {
                        server.start();
                        log.info("OmsRestClient server started@" + port);
                        server.join();
                    } catch (Exception e) {
                        log.error("OmsRestClient server start@" + port + " failed", e);
                        shutDown();
                    }
                } finally {
                    log.error("OmsRestClient server exit@" + port + " failed");
                    server.destroy();
                }

            }
        }).start();
    }

    private static String loadConf() {
        String confPath = System.getProperty(ConfigKey.OMS_REST_CLIENT_CONFPATH);
        if (null == confPath) {
            confPath = System.getenv(ConfigKey.OMS_REST_CLIENT_CONFPATH);
        }
        if (null == confPath) {
            confPath = System.getProperty("user.home");
        }

        try {
            ConfLoader.getInstance().loadConf(confPath + "/omsRestClient.conf.properties");
        } catch (OmsRestClientException e) {
            e.printStackTrace();
            shutDown();
        }

        return confPath;
    }
    private static void shutDown() {
        log.info("Shutdown.");
        System.exit(1);
    }


    private static void configProxy(){
        String host = ConfLoader.getInstance().getConf(ConfigKey.HTTP_PROXYHOST, null);
        int port = ConfLoader.getInstance().getInt(ConfigKey.HTTP_PROXYPORT, 0);
        if(null!=host && 0!=port){
            log.info("http proxy enabled: "+host+':'+port);
            System.setProperty("http.proxySet", "true");
            System.setProperty("http.proxyHost", host);
            System.setProperty("http.proxyPort", ""+port);
        }

    }
}
