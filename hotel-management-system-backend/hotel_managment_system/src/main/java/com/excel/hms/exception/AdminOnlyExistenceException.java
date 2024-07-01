package com.excel.hms.exception;

public class AdminOnlyExistenceException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public AdminOnlyExistenceException(String message) {
		super(message);
	}
}
