package com.excel.hms.exception;

public class AdminInvalidPasswordException extends RuntimeException {

	public static final long serialVersionUID = 1L;
	public AdminInvalidPasswordException(String message) {
		super(message);
	}
}
