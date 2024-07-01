package com.excel.hms.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.hms.exception.DuplicateSubscriptionException;
import com.excel.hms.response.CommonResponse;

@RestControllerAdvice
public class SubscriptionHandler {

	@ExceptionHandler(DuplicateSubscriptionException.class)
	public ResponseEntity<CommonResponse<String>> duplicateSubscription(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
}
