package com.alu.restfulClientTestMgr.OmsClient;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class SessionTask extends Thread
{
    private volatile boolean goon;

    private ISession session;

    private int registerInterval = -1;

    private int pingInterval = -1;

    private boolean sessionLost = false;

    private static Logger log = LogManager.getLogger( SessionTask.class );

    public SessionTask( ISession session )
    {
        this.session = session;
    }

    public void setRegisterInterval( int interval )
    {
        if( interval <= 0 )
            throw new IllegalArgumentException( "Negative argument interval: "
                    + interval );
        registerInterval = interval;
    }

    public void setPingInterval( int interval )
    {
        if( interval <= 0 )
            throw new IllegalArgumentException( "Negative argument interval: "
                    + interval );
        pingInterval = interval;
    }

    @Override
    public void run()
    {
        goon = true;
        while( goon )
        {
            try
            {
                if( session.register() )
                {
                    log.debug( "Register session succ" );
                    if( sessionLost )
                    {
                        sessionLost = false;
                        session.sessionRecover();
                    }
                    while( goon )
                    {
                        sleep( pingInterval );
                        if( !session.ping() )
                        {
                            sessionLost = true;
                            session.sessionLost();
                            break;
                        }
                    }
                }
                sleep( registerInterval );
            }
            catch( InterruptedException e )
            {
            }
        }
    }

    public void terminate()
    {
        goon = false;
        interrupt();
    }
}