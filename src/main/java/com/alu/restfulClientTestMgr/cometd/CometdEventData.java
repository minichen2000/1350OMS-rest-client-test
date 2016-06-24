package com.alu.restfulClientTestMgr.cometd;

import java.util.Map;

public class CometdEventData {
	String type;
	Map<String, Object> targetObj;
	Map<String, Object> attributes;
	String id;
	String className;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Map<String, Object> getTargetObj() {
		return targetObj;
	}

	public void setTargetObj(Map<String, Object> targetObj) {
		this.targetObj = targetObj;
	}

	public Map<String, Object> getAttributes() {
		return attributes;
	}

	public void setAttributes(Map<String, Object> attributes) {
		this.attributes = attributes;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}
}
