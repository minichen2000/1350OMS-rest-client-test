package com.alu.restfulClientTestMgr.TestMgrServer.servlet;

import com.alu.restfulClientTestMgr.JettyHttpClientService.HttpCall;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

public class Op extends HttpServlet
{
	private static Logger log = LogManager.getLogger( Op.class );
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
    {
		resp.setContentType("text/html;charset=utf-8");
		resp.setHeader("Cache-Control","no-cache");

		req.setCharacterEncoding("utf-8");

		String url=req.getParameter("url");
		String method=req.getParameter("method");
		String contentType=req.getParameter("contentType");

		BufferedReader reader = req.getReader();
		String line;
		StringBuilder sb=new StringBuilder();
		while ((line = reader.readLine()) != null)
			sb.append(line);
		String payloadData=sb.toString();


		log.debug( "Op: [" + method+"]: "+url );
		log.debug( "Op payloadData: \n" + payloadData);

		if(null==payloadData || payloadData.length()==0){
			payloadData="";
		}

		resp.setStatus(HttpServletResponse.SC_OK);
		String rlt=null;
		if(method.toLowerCase().equals("get")){
			rlt=HttpCall.instance().getCall( url, contentType );
		}else if(method.toLowerCase().equals("post")){
			rlt=HttpCall.instance().postCall( url, payloadData, contentType, contentType, null );
		}else if(method.toLowerCase().equals("delete")){
			rlt=HttpCall.instance().deleteCall( url);
		}else {
			resp.setStatus(HttpServletResponse.SC_NOT_IMPLEMENTED);
		}

		log.debug( "Op rlt : " + rlt );
		PrintWriter out = resp.getWriter();
		out.println(rlt);
    }

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doGet(req, resp);
	}
    
    
}