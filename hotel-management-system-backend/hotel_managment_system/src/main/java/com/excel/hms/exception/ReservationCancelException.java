package com.excel.hms.exception;

public class ReservationCancelException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public ReservationCancelException(String message) {
		super(message);
	}
}
