package com.excel.hms.exception.handler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.hms.exception.AdminExistenceException;
import com.excel.hms.exception.AdminInvalidPasswordException;
import com.excel.hms.exception.AdminInvalidUsernameException;
import com.excel.hms.exception.AdminNotFoundException;
import com.excel.hms.exception.AdminOnlyExistenceException;

@RestControllerAdvice
public class AdminExceptionHandler {
	
	@ExceptionHandler(AdminExistenceException.class)
	private ResponseEntity<String> adminAlreadyExist(RuntimeException exe){
		return ResponseEntity.ok(exe.getMessage());
	}
	@ExceptionHandler(AdminInvalidPasswordException.class)
	private ResponseEntity<String> adminPasswordInvalid(RuntimeException exe){
		return ResponseEntity.ok(exe.getMessage());
	}
	@ExceptionHandler(AdminInvalidUsernameException.class)
	private ResponseEntity<String> adminInvalidUsername(RuntimeException exe){
		return ResponseEntity.ok(exe.getMessage());
	}
	@ExceptionHandler(AdminNotFoundException.class)
	private ResponseEntity<String> adminIdNotFound(RuntimeException exe){
		return ResponseEntity.ok(exe.getMessage());
	}
	@ExceptionHandler(AdminOnlyExistenceException.class)
	private ResponseEntity<String> adminOnlyExist(RuntimeException exe){
		return ResponseEntity.ok(exe.getMessage());
	}
}

