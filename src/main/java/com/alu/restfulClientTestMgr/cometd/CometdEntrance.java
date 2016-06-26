package com.alu.restfulClientTestMgr.cometd;


public class CometdEntrance
{

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
            //client.subscribe("/events/map/link/avc", new CometdEventListener());
            //client.subscribe("/oms1350/events/155811cd03732/Request", new CometdEventListener());
            client.subscribe("/oms1350/events/npr/PhysicalConn", new CometdEventListener());
            client.subscribe("/oms1350/events/otn/trail", new CometdEventListener());
            client.subscribe("/oms1350/events/otn/path", new CometdEventListener());

        }
        catch( Exception e )
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
