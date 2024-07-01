package com.excel.hms.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.hms.exception.ReservationCancelException;
import com.excel.hms.exception.ReservationIdNotFoundException;
import com.excel.hms.exception.ReservationsNotFetchException;
import com.excel.hms.response.CommonResponse;

@RestControllerAdvice
public class ReservationExceptionHandler {

	@ExceptionHandler(ReservationIdNotFoundException.class)
	public ResponseEntity<CommonResponse<String>> reservationIdNotFound(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
	@ExceptionHandler(ReservationsNotFetchException.class)
	public ResponseEntity<CommonResponse<String>> reservationsNotFound(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
	@ExceptionHandler(ReservationCancelException.class)
	public ResponseEntity<CommonResponse<String>> reservationCancel(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(null)
				.isError(false).message(exe.getMessage()).build());
	}
}
