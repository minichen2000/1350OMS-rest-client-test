package com.alu.restfulClientTestMgr.TestMgrServer.notification;

import com.alu.restfulClientTestMgr.cometd.CometdEntrance;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.cometd.bayeux.Message;
import org.eclipse.jetty.websocket.api.RemoteEndpoint;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.WebSocketAdapter;

import java.io.IOException;


public class NotificationWebSocket extends WebSocketAdapter {
	private static Logger log = LogManager.getLogger(NotificationWebSocket.class);

	private CometdEntrance.SecondHandListener l=null;


	@Override
	public void onWebSocketClose(int statusCode, String reason) {
		// TODO Auto-generated method stub
		super.onWebSocketClose(statusCode, reason);
		System.out.println("onWebSocketClose");
		CometdEntrance.unregisterShL(l);
		l=null;
	}
	
	


	@Override
	public void onWebSocketConnect(Session sess) {
		// TODO Auto-generated method stub
		super.onWebSocketConnect(sess);

		System.out.println("onWebSocketConnect");
		final RemoteEndpoint remote = getRemote();
		if(null==l){
			l=new CometdEntrance.SecondHandListener() {
				@Override
				public void onMessage(Message msg) {
					try {
						log.info("onMessage msg::"+msg);
						log.info("onMessage getData:"+msg.getData());
						log.info("onMessage getJSON:"+msg.getJSON());
						String rltStr=msg.getJSON();
						if(rltStr.contains("\\")){
							String data=msg.getData().toString();
							String channel=msg.getChannel();
							String id=msg.getId();
							rltStr="{\"data\":"+data+", \"channel\": \""+channel+"\", \"id\": \""+id+"\"}";
						}
						remote.sendString(rltStr);
						log.info("Sent string to client: \n"+rltStr);
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			};
		}
		CometdEntrance.registerShL(l);

	}

	@Override
	public void onWebSocketError(Throwable cause) {
		// TODO Auto-generated method stub
		super.onWebSocketError(cause);
		System.out.println("onWebSocketError: " + cause.toString());
		CometdEntrance.unregisterShL(l);
		l=null;
	}

	@Override
	public void onWebSocketText(String message) {
		// TODO Auto-generated method stub
		super.onWebSocketText(message);
		System.out.println("onWebSocketText:" + message);
	}

}
