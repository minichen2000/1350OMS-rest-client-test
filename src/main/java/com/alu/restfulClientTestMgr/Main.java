package com.alu.restfulClientTestMgr;

import com.alu.restfulClientTestMgr.constants.ConfLoader;
import com.alu.restfulClientTestMgr.constants.ConfLoaderException;
import com.alu.restfulClientTestMgr.constants.ConfigKey;
import com.beust.jcommander.JCommander;
import com.beust.jcommander.Parameter;
import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.LoggerContext;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.FilterHolder;
import org.eclipse.jetty.servlet.FilterMapping;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.eclipse.jetty.webapp.WebAppContext;
import org.eclipse.jetty.websocket.jsr356.server.deploy.WebSocketServerContainerInitializer;

import javax.servlet.ServletException;
import java.io.File;
import java.net.URISyntaxException;
import java.net.URL;

/**
 * Created by chenmin on 2017/3/30.
 */
public class Main {
    private static Logger log;
    public static void main(String[] args) throws Exception{
        loadConf(args);

        confLog();
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
            //log.debug("webAppDir: "+webAppDir.toString());
            //log.debug("webAppContext.setResourceBase: "+webAppDir.toURI().toString());
            webAppContext.setResourceBase(webAppDir.toURI().toString());
            webAppContext.setParentLoaderPriority(true);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        ////////////////////////

        final int port = ConfLoader.getInstance().getInt(ConfigKey.server_port);
        final Server server = new Server(port);
        server.setHandler(webAppContext);

        //if you have Websocket Servlet in your web.xml you should add below lines to initialize it.
        try {
            WebSocketServerContainerInitializer.configureContext(webAppContext);
        } catch (ServletException e) {
            log.info("WebSocketServerContainerInitializer.configureContext failed.", e);
            shutDown();
        }

        //CORS filter
        FilterHolder filter = new FilterHolder(CrossOriginFilter.class);
        filter.setInitParameter(CrossOriginFilter.ALLOWED_ORIGINS_PARAM, "*");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_METHODS_PARAM, "POST,GET,OPTIONS,PUT,DELETE,HEAD,PATCH");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_HEADERS_PARAM, "X-Requested-With, Content-Type, Accept, Origin, access-control-allow-origin");
        filter.setName("cross-origin");
        FilterMapping fm = new FilterMapping();
        fm.setFilterName("cross-origin");
        fm.setPathSpec("*");
        webAppContext.getServletHandler().addFilter(filter, fm );

        ////////////////////////


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

    private static void confLog() throws Exception{
        String log_conf_file=ConfLoader.getInstance().getConf(ConfigKey.log_conf_file, null);
        if((new File(log_conf_file).canRead())){
            System.setProperty("log4j.configurationFile", log_conf_file);
            LoggerContext loggerContext = (LoggerContext) LogManager.getContext(false);
            loggerContext.reconfigure();
        }else{
            LoggerContext loggerContext = (LoggerContext) LogManager.getContext(false);
            loggerContext.getConfiguration().getRootLogger().setLevel(ConfLoader.getInstance().getBoolean(ConfigKey.debug) ? Level.DEBUG : Level.INFO);
        }
    }

    private static void loadConf(String[] args) {
        parseCommandLine(args);
        if(!ConfLoader.getInstance().getConf(ConfigKey.conf_file, "").isEmpty()){
            try {
                ConfLoader.getInstance().loadConf(ConfLoader.getInstance().getConf(ConfigKey.conf_file, ""));
            } catch (ConfLoaderException e) {
                e.printStackTrace();
            }
        }
    }

    private static void parseCommandLine(String[] _args){

        class Args{
            @Parameter(names={"-"+ConfigKey.server_port}, order = 0, description="Http server port")
            private int server_port=ConfigKey.default_server_port;

            @Parameter(names={"-"+ConfigKey.conf_file}, order = 1, description = "Configuation file")
            private String conf_file="";

            @Parameter(names={"-"+ConfigKey.log_conf_file}, order = 2, description ="Log4j2 configuration file")
            private String log_conf_file="";

            @Parameter(names={"-"+ConfigKey.proxy_host}, order = 3, description="Http proxy host")
            private String proxy_host="";

            @Parameter(names={"-"+ConfigKey.proxy_port}, order = 4, description = "Http proxy port")
            private int proxy_port=0;

            @Parameter(names={"-"+ConfigKey.debug}, order = 5, description = "Debug mode (only in case log_conf_file is not available)")
            private boolean debug=false;

            @Parameter(names={"-help"}, order = 6, help=true, description = "Show this help")
            private boolean help=false;
        }
        Args args=new Args();
        JCommander jc=new JCommander(args, _args);
        if(args.help){
            jc.usage();
            System.exit(0);
        }

        ConfLoader.getInstance().setInt(ConfigKey.server_port, args.server_port);
        ConfLoader.getInstance().setConf(ConfigKey.conf_file, args.conf_file);
        ConfLoader.getInstance().setConf(ConfigKey.log_conf_file, args.log_conf_file);
        ConfLoader.getInstance().setConf(ConfigKey.proxy_host, args.proxy_host);
        ConfLoader.getInstance().setInt(ConfigKey.proxy_port, args.proxy_port);
        ConfLoader.getInstance().setBoolean(ConfigKey.debug, args.debug);

    }
    private static void shutDown() {
        log.info("Shutdown.");
        System.exit(1);
    }


    private static void configProxy() throws Exception{
        String host = ConfLoader.getInstance().getConf(ConfigKey.proxy_host);
        int port = ConfLoader.getInstance().getInt(ConfigKey.proxy_port);
        if(null!=host && !host.isEmpty() && 0!=port){
            log.info("http proxy enabled: "+host+':'+port);
            System.setProperty("http.proxySet", "true");
            System.setProperty("http.proxyHost", host);
            System.setProperty("http.proxyPort", ""+port);
        }
    }
}
