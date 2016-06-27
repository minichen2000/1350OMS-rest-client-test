package com.alu.restfulClientTestMgr.TestMgrServer.notification;

import com.alu.restfulClientTestMgr.cometd.CometdEntrance;
import org.cometd.bayeux.Message;
import org.eclipse.jetty.websocket.api.RemoteEndpoint;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.WebSocketAdapter;

import java.io.IOException;


public class NotificationWebSocket extends WebSocketAdapter {

	private CometdEntrance.SecondHandListener l=null;


	@Override
	public void onWebSocketClose(int statusCode, String reason) {
		// TODO Auto-generated method stub
		super.onWebSocketClose(statusCode, reason);
		System.out.println("onWebSocketClose");
		CometdEntrance.registerShL(l);
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
						remote.sendString(msg.getJSON());
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
		CometdEntrance.registerShL(l);
		l=null;
	}

	@Override
	public void onWebSocketText(String message) {
		// TODO Auto-generated method stub
		super.onWebSocketText(message);
		System.out.println("onWebSocketText:" + message);
	}

}
