package com.alu.restfulClientTestMgr.cometd;


import org.cometd.bayeux.Message;
import org.cometd.bayeux.client.ClientSessionChannel;

import java.util.ArrayList;
import java.util.List;


public class CometdEntrance
{
    private static ClientSessionChannel.MessageListener l=new CometdEventListener();

    static public interface SecondHandListener{
        public void onMessage(Message msg);
    }
    private static List<SecondHandListener> shL=new ArrayList<SecondHandListener>();

    static public void registerShL(SecondHandListener l){
        shL.add(l);
    }
    static public void unregisterShL(SecondHandListener l){
        shL.remove(l);
    }
    static public void fireSHMsg(Message msg){
        for(SecondHandListener l : shL){
            l.onMessage(msg);
        }
    }

    public static void start()
    {
        try
        {
            CometdNotifyClient client = CometdNotifyClient.getInstance();
            if( client.isConnected() )
            {
                client.setIsConnected( false );
                client.disconnect();
            }
            client.attachToCometdServer();
            client.subscribe("/oms1350/events/npr/PhysicalConn", l);
            client.subscribe("/oms1350/events/otn/trail", l);
            client.subscribe("/oms1350/events/otn/path", l);

        }
        catch( Exception e )
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
