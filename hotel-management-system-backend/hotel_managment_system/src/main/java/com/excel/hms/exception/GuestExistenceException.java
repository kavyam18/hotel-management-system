package com.excel.hms.exception;

public class GuestExistenceException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public GuestExistenceException(String message) {
		super(message);
	}
}
