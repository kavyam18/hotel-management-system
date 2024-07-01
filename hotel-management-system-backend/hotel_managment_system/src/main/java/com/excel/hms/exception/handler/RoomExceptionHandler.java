package com.excel.hms.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.hms.exception.RoomIdNotFoundException;
import com.excel.hms.exception.RoomNumberNotFoundException;
import com.excel.hms.exception.RoomsNotFetchException;
import com.excel.hms.response.CommonResponse;

@RestControllerAdvice
public class RoomExceptionHandler {

	@ExceptionHandler(RoomNumberNotFoundException.class)
	public ResponseEntity<CommonResponse<String>> roomNumberNotFound(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
	@ExceptionHandler(RoomsNotFetchException.class)
	public ResponseEntity<CommonResponse<String>> roomsNotFetch(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
	@ExceptionHandler(RoomIdNotFoundException.class)
	public ResponseEntity<CommonResponse<String>> roomIdNotFound(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
}
