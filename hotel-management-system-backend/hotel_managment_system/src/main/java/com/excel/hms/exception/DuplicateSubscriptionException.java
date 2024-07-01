package com.excel.hms.exception;

public class DuplicateSubscriptionException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public DuplicateSubscriptionException(String message) {
		super(message);
	}
}
