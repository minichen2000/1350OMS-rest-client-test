package com.alu.restfulClientTestMgr.OmsClient;

import java.io.File;
import java.util.HashMap;
import java.util.Properties;


public class ConfLoader
{
    private static ConfLoader confLoader = new ConfLoader();
    private static HashMap<String, String> _confMap=new HashMap<String, String>();
    private static HashMap<String, Integer> _intMap=new HashMap<String, Integer>();
    private static HashMap<String, Boolean> _booleanMap=new HashMap<String, Boolean>();

    private ConfLoader()
    {
    }

    public static ConfLoader getInstance()
    {
        return confLoader;
    }



    public String getConf( String name )
    {
        return getConf(name, null);
    }
    public String getConf( String name, String def)
    {
        return _confMap.containsKey(name) ? _confMap.get(name) : def;
    }

    public int getInt( String name, int def )
    {
        return _intMap.containsKey(name) ? _intMap.get(name) : def;
    }

    public boolean getBoolean( String name, boolean def )
    {
        return _booleanMap.containsKey(name) ? _booleanMap.get(name) : def;
    }

    public void setConf(String name, String value){
        _confMap.put(name, value);
    }

    public void setInt(String name, int value){
        _intMap.put(name, value);
    }

    public void setBoolean(String name, boolean value){
        _booleanMap.put(name, value);
    }


}