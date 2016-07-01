package com.alu.restfulClientTestMgr.cometd;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import com.alu.restfulClientTestMgr.OmsClient.ConfLoader;
import org.apache.log4j.Logger;
import org.cometd.bayeux.client.ClientSessionChannel;
import org.cometd.client.BayeuxClient;
import org.cometd.client.transport.ClientTransport;
import org.cometd.client.transport.LongPollingTransport;
import org.cometd.common.JSONContext;
import org.cometd.common.Jackson2JSONContextClient;
import org.eclipse.jetty.client.HttpClient;
import org.eclipse.jetty.util.ssl.SslContextFactory;
import org.cometd.bayeux.Channel;
import org.cometd.bayeux.Message;



public class CometdNotifyClient {

	private static Logger log = Logger.getLogger(CometdNotifyClient.class);
	private String cometURL;
	private Boolean isAttached = false;
	private static CometdNotifyClient instance;
	private HttpClient httpClient = new HttpClient(new SslContextFactory(true));
	private BayeuxClient client;
	private ScheduledThreadPoolExecutor tpe = null;
	private ScheduledFuture<?> future;

	private ClientSessionChannel.MessageListener metaL=new ClientSessionChannel.MessageListener() {
		public void onMessage(ClientSessionChannel channel, Message message) {
			log.debug( "\nMessage:\n"+"On Channel: "+channel+"\n"+message );
			boolean success = message.isSuccessful();
			if (!success) {
				// Disconnect
				log.debug("**************** Disconnected from Comet Server***************************");
				isAttached = false;
				client.disconnect();
				log.debug("reconnection to Server");
				connectToCometdServer();
			}
		}

	};

	private CometdNotifyClient() {
	}

	public static CometdNotifyClient getInstance() {
		if (instance == null) {
			instance = new CometdNotifyClient();
		}
		return instance;
	}
	

	public void attachToCometdServer() throws Exception {

		String baseUrl = null;
		String port = ConfLoader.getInstance().getConf("COMETDPORT", CometdConstant.notify_port);
		String protocol = "http";
		String otnHostName = ConfLoader.getInstance().getConf("COMETDHOST", "135.251.96.33");
		
		baseUrl = protocol + "://" + otnHostName + ":" + port;

		cometURL = baseUrl + ConfLoader.getInstance().getConf("COMETDSERVERURL", CometdConstant.notify_serverUrl);

		log.debug("Comet Server URL is : " + cometURL);

		log.debug("attachToCometServer started");
		try {
			if (!httpClient.isStopped())
				httpClient.stop();
			httpClient.start();
		} catch (Exception ex) {
			log.error("Exception while starting httpclient");
			ex.printStackTrace();
			throw ex;
		}


		Map<String, Object> transportOptions = new HashMap<String, Object>();
		JSONContext.Client jsonContext = new Jackson2JSONContextClient();

		transportOptions.put(ClientTransport.JSON_CONTEXT_OPTION, jsonContext);
		ClientTransport transport = new LongPollingTransport(transportOptions, httpClient);
		
		
		client = new BayeuxClient(cometURL, transport);
		
		connectToCometdServer();
	}

	

	private void connectToCometdServer() {

		log.debug("**************** Inside connectToCometServer method***************************");

		if (tpe == null || tpe.isShutdown()) {
			log.debug("Instantiating thread pool");
			tpe = new ScheduledThreadPoolExecutor(1);
			tpe.setKeepAliveTime(10, TimeUnit.SECONDS);
		}

		try {

			int pollTimeout = 60000;

			future = tpe.scheduleAtFixedRate(new Runnable() {
				public void run() {
					try {
						if (!isAttached) {

							if (client.isConnected())
								client.disconnect();

							client.handshake();
							log.debug("Handshake initiated");
							boolean handshaken = client.waitFor(1000, BayeuxClient.State.CONNECTED);

							if (handshaken) {
								// Connected successfully to comet server
								log.debug("Connected successfully to cometd server on URL "+ cometURL);
								isAttached = true;
								log.debug("Set isAttached to true");

								future.cancel(false);

								ClientSessionChannel.MessageListener l=new CometdEventListener();
								subscribe("/oms1350/events/npr/PhysicalConn", l);
								subscribe("/oms1350/events/otn/trail", l);
								subscribe("/oms1350/events/otn/path", l);
								subscribe("/event/notif/common", l);

								// Subscribe to connect messages
								client.getChannel(Channel.META_CONNECT)
										.addListener(metaL);

							}
						}
					} catch (Exception e) {
						log.error("Error in connecting to comet", e);
						e.printStackTrace();
					}
				}

			}, 0, pollTimeout, TimeUnit.MILLISECONDS);

		} catch (Exception ex) {
			log.error("Exception in connectToCometServer", ex);
			ex.printStackTrace();
		}
	}

	public void subscribe(final String cometdChannel,
						  ClientSessionChannel.MessageListener cometEventListener) {
		log.debug("Subscribing to the channel : " + cometdChannel);

		client.getChannel(cometdChannel).subscribe(cometEventListener, new ClientSessionChannel.MessageListener(){
			@Override
			public void onMessage(ClientSessionChannel clientSessionChannel, Message message) {
				log.debug("Subscription successful: "+cometdChannel);
			}
		});
	}

	public void unsubscribe(final String cometdChannel,
							ClientSessionChannel.MessageListener cometEventListener) {
		log.debug("Unsubscribing to the channel : " + cometdChannel);

		client.getChannel(cometdChannel).unsubscribe(cometEventListener, new ClientSessionChannel.MessageListener(){
			@Override
			public void onMessage(ClientSessionChannel clientSessionChannel, Message message) {
				log.debug("Unsubscription successful: "+cometdChannel);
			}
		});
	}

	public void disconnect(){
		if(null!=client){
			client.getChannel(Channel.META_CONNECT).removeListener(metaL);
		}

		tpe.shutdownNow();
		tpe=null;
		setIsConnected(false);
		client.disconnect();
		try {
			httpClient.stop();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public Boolean isConnected() {
		return isAttached;
	}

	public void setIsConnected(Boolean isAttached) {
		this.isAttached = isAttached;
	}
	

}
