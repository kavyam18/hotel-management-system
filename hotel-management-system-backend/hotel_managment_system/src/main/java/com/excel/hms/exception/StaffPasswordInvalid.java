package com.excel.hms.exception;

public class StaffPasswordInvalid extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public StaffPasswordInvalid(String message) {
		super(message);
	}
}
