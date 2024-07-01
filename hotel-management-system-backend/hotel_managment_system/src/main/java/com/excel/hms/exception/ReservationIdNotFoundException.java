package com.excel.hms.exception;

public class ReservationIdNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public ReservationIdNotFoundException(String message) {
		super(message);
	}
}
