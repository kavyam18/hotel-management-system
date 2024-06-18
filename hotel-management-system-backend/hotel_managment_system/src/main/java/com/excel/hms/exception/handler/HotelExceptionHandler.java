package com.excel.hms.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.hms.exception.HotelException;
import com.excel.hms.response.CommonResponse;

@RestControllerAdvice
public class HotelExceptionHandler {
	@ExceptionHandler(HotelException.class)
	public ResponseEntity<CommonResponse<String>> employeeExceptionHandler(RuntimeException ex){
		return ResponseEntity.status(HttpStatus.OK)
				.body(CommonResponse.<String>builder().data(null)
						.isError(true).message(ex.getMessage()).build());
	}
}
