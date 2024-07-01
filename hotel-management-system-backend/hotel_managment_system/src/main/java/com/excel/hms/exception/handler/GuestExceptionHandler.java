package com.excel.hms.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.hms.exception.GuestEmailNotFoundException;
import com.excel.hms.exception.GuestExistenceException;
import com.excel.hms.response.CommonResponse;

@RestControllerAdvice
public class GuestExceptionHandler {

	@ExceptionHandler(GuestEmailNotFoundException.class)
	public ResponseEntity<CommonResponse<String>> emailNotFound(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
	@ExceptionHandler(GuestExistenceException.class)
	public ResponseEntity<CommonResponse<String>> guestAlreadyActive(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
}
