package com.excel.hms.exception;

public class GuestEmailNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public GuestEmailNotFoundException(String message) {
		super(message);
	}
 
}
