package com.alu.restfulClientTestMgr.exception;



public class OmsRestClientException extends Exception {
	private static final long serialVersionUID = 479829418798909619L;
	public String errorReason_;
	public String errorCode;

	public OmsRestClientException(String code, String errorReason) {
		super("Exception code:" + code + " and errorReason:" + errorReason);
		this.errorCode=code;
		this.errorReason_ = errorReason;
	}

	public OmsRestClientException(String code, String errorReason, Throwable cause) {
		super(cause);
		errorCode=code;
		errorReason_ = errorReason;
	}
}
