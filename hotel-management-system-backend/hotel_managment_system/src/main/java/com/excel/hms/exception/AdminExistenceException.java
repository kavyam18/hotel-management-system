package com.excel.hms.exception;

public class AdminExistenceException extends RuntimeException {
	
	public static final long serialVersionUID = 1L;

	public AdminExistenceException(String message) {
		
		super(message);
	}
}

