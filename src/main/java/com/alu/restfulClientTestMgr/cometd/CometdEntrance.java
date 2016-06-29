package com.alu.restfulClientTestMgr.cometd;

import org.apache.log4j.Logger;
import org.cometd.bayeux.ChannelId;
import org.cometd.bayeux.Message;
import org.cometd.bayeux.client.ClientSessionChannel;

import java.util.*;


public class CometdEntrance
{
    private static Logger log = Logger.getLogger( CometdEntrance.class );
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
                client.disconnect();
            }
            client.attachToCometdServer();
            /*client.subscribe("/oms1350/events/npr/PhysicalConn", l);
            client.subscribe("/oms1350/events/otn/trail", l);
            client.subscribe("/oms1350/events/otn/path", l);*/

        }
        catch( Exception e )
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public static void stop()
    {
        try
        {
            CometdNotifyClient client = CometdNotifyClient.getInstance();
            if( client.isConnected() )
            {
                log.debug("Cometed server stopped.");
                client.disconnect();
            }
            /*client.subscribe("/oms1350/events/npr/PhysicalConn", l);
            client.subscribe("/oms1350/events/otn/trail", l);
            client.subscribe("/oms1350/events/otn/path", l);*/

        }
        catch( Exception e )
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public static void FireSHMsgLoopTest(){
        new Thread(new Runnable(){
            @Override
            public void run() {
                for(;;){
                    Message m=new Message(){
                        @Override
                        public int size() {
                            return 0;
                        }

                        @Override
                        public boolean isEmpty() {
                            return false;
                        }

                        @Override
                        public boolean containsKey(Object key) {
                            return false;
                        }

                        @Override
                        public boolean containsValue(Object value) {
                            return false;
                        }

                        @Override
                        public Object get(Object key) {
                            return null;
                        }

                        @Override
                        public Object put(String key, Object value) {
                            return null;
                        }

                        @Override
                        public Object remove(Object key) {
                            return null;
                        }

                        @Override
                        public void putAll(Map<? extends String, ?> m) {

                        }

                        @Override
                        public void clear() {

                        }

                        @Override
                        public Set<String> keySet() {
                            return null;
                        }

                        @Override
                        public Collection<Object> values() {
                            return null;
                        }

                        @Override
                        public Set<Entry<String, Object>> entrySet() {
                            return null;
                        }

                        @Override
                        public Map<String, Object> getAdvice() {
                            return null;
                        }

                        @Override
                        public String getChannel() {
                            return null;
                        }

                        @Override
                        public ChannelId getChannelId() {
                            return null;
                        }

                        @Override
                        public String getClientId() {
                            return null;
                        }

                        @Override
                        public Object getData() {
                            return null;
                        }

                        @Override
                        public boolean isMeta() {
                            return false;
                        }

                        @Override
                        public boolean isPublishReply() {
                            return false;
                        }

                        @Override
                        public boolean isSuccessful() {
                            return false;
                        }

                        @Override
                        public Map<String, Object> getDataAsMap() {
                            return null;
                        }

                        @Override
                        public Map<String, Object> getExt() {
                            return null;
                        }

                        @Override
                        public String getId() {
                            return null;
                        }

                        @Override
                        public String getJSON() {
                            return "{\"msg\": \"hello\"}";
                        }
                    };
                    log.debug("fire one message:\n"+m.getJSON());
                    fireSHMsg(m);
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }

            }
        }).start();

    }
}
