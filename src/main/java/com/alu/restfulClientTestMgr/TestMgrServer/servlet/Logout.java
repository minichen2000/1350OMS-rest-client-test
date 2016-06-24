package com.alu.restfulClientTestMgr.TestMgrServer.servlet;

import com.alu.restfulClientTestMgr.OmsClient.RestFulLoginManager;
import org.apache.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Logout extends HttpServlet {
    private static Logger log = Logger.getLogger(Logout.class);

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=utf-8");
        resp.setHeader("Cache-Control", "no-cache");

        req.setCharacterEncoding("utf-8");


        resp.setStatus(HttpServletResponse.SC_OK);

        PrintWriter out = resp.getWriter();

        RestFulLoginManager.getInstance().endSession();
        out.println("OK");


    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        doGet(req, resp);
    }


}