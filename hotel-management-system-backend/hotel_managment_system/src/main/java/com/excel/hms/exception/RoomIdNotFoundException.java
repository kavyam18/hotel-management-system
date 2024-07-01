package com.excel.hms.exception;

public class RoomIdNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public RoomIdNotFoundException(String message) {
		super(message);
	}
}
