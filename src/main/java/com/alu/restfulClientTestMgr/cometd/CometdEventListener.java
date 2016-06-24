package com.alu.restfulClientTestMgr.cometd;


import org.apache.log4j.Logger;
import org.cometd.bayeux.Message;
import org.cometd.bayeux.client.ClientSessionChannel;

public class CometdEventListener implements
        ClientSessionChannel.MessageListener
{

    private static Logger log = Logger.getLogger( CometdEventListener.class );


    public void onMessage( ClientSessionChannel channel, Message message )
    {
        // Here we received a message on the channel
        log.debug( "\nMessage:\n"+"On Channel: "+channel+"\n"+message );

    }
}