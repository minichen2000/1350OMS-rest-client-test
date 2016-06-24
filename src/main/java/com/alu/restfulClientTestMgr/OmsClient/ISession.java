package com.alu.restfulClientTestMgr.OmsClient;

public interface ISession
{
    public boolean register();

    public boolean ping();

    public void sessionLost();
    
    public void sessionRecover();

    public boolean isConnected();
}
