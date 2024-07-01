package com.excel.hms.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.hms.exception.StaffExistenceException;
import com.excel.hms.exception.StaffIdNotFoundException;
import com.excel.hms.exception.StaffPasswordInvalid;
import com.excel.hms.response.CommonResponse;

@RestControllerAdvice
public class StaffExceptionHandler {

	@ExceptionHandler(StaffIdNotFoundException.class)
	public ResponseEntity<CommonResponse<String>> staffIdNotFound(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
	@ExceptionHandler(StaffExistenceException.class)
	public ResponseEntity<CommonResponse<String>> staffexistence(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
	@ExceptionHandler(StaffPasswordInvalid.class)
	public ResponseEntity<CommonResponse<String>> staffPasswordInvalid(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
}
