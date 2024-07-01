package com.excel.hms.exception;

public class StaffIdNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public StaffIdNotFoundException(String message) {
		super(message);
	}
}
