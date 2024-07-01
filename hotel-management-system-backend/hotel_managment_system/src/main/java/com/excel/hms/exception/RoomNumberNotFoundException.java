package com.excel.hms.exception;

public class RoomNumberNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public RoomNumberNotFoundException(String message) {
		super(message);
	}
}
