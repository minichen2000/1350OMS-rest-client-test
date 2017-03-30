package com.alu.restfulClientTestMgr.TestMgrServer.servlet;

import com.alu.restfulClientTestMgr.OmsClient.ConfLoader;
import com.alu.restfulClientTestMgr.OmsClient.RestFulLoginManager;
import org.apache.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Login extends HttpServlet
{
	private static Logger log = Logger.getLogger( Login.class );
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
    {
		resp.setContentType("text/html;charset=utf-8");
		resp.setHeader("Cache-Control","no-cache");

		req.setCharacterEncoding("utf-8");

		try {
			//log.debug(req.getParameterMap().toString());

			String otnip=req.getParameter("otnip");
			int otnport=Integer.parseInt(req.getParameter("otnport"));
			String casip=req.getParameter("casip");
			int casport=Integer.parseInt(req.getParameter("casport"));
			String casurl=req.getParameter("casurl");
			String presentationip=req.getParameter("presentationip");
			String guiusername=req.getParameter("guiusername");
			String guipassword=req.getParameter("guipassword");
			String omsurl=req.getParameter("omsurl");

			log.debug("otnip: "+otnip+"\n");
			log.debug("otnport: "+otnport+"\n");
			log.debug("casip: "+casip+"\n");
			log.debug("casport: "+casport+"\n");
			log.debug("casurl: "+casurl+"\n");
			log.debug("presentationip: "+presentationip+"\n");
			log.debug("guiusername: "+guiusername+"\n");
			log.debug("guipassword: "+guipassword+"\n");
			log.debug("omsurl: "+omsurl+"\n");

			ConfLoader.getInstance().setConf("otnip", otnip);
			ConfLoader.getInstance().setInt("otnport", otnport);
			ConfLoader.getInstance().setConf("casip", casip);
			ConfLoader.getInstance().setInt("casport", casport);
			ConfLoader.getInstance().setConf("casurl", casurl);
			ConfLoader.getInstance().setConf("presentationip", presentationip);
			ConfLoader.getInstance().setConf("guiusername", guiusername);
			ConfLoader.getInstance().setConf("guipassword", guipassword);
			ConfLoader.getInstance().setConf("omsurl", omsurl);
			ConfLoader.getInstance().setConf("COMETDHOST", otnip);

			resp.setStatus(HttpServletResponse.SC_OK);

			PrintWriter out = resp.getWriter();

			if( RestFulLoginManager.getInstance().isConnected()){
				RestFulLoginManager.getInstance().endSession();
			}
			RestFulLoginManager.getInstance().startSession();
			out.println("OK");

		} catch (NumberFormatException e) {
			e.printStackTrace();

			resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);

			PrintWriter out = resp.getWriter();
			out.println("Error");
		}



    }

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doGet(req, resp);
	}
    
    
}