package com.excel.hms.controller;

import static com.excel.hms.constant.GuestConstant.GUEST_MESSAGE_SAVED_SUCCESS;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excel.hms.dto.FeedbackDto;
import com.excel.hms.response.CommonResponse;
import com.excel.hms.service.FeedbackService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/v1/hotelmanagment")
@CrossOrigin
public class FeedbackController {

	@Autowired
	private FeedbackService feedbackService;
	
	//---------------------------Feedback------------------------------------------------
	@PostMapping("/message")
	public ResponseEntity<CommonResponse<String>> message(@RequestBody FeedbackDto dto){
		String contact = feedbackService.addMessage(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<String>builder().data(contact)
				.isError(false).message(GUEST_MESSAGE_SAVED_SUCCESS).build());
	}
	//--------------------------Fetch all Feedback data-----------------------
	@GetMapping(path = "/getAllData")
	public ResponseEntity<CommonResponse<List<FeedbackDto>>> getAll(){
		List<FeedbackDto> contact = feedbackService.getAllData();
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<List<FeedbackDto>>builder().data(contact)
				.isError(false).message("Fetch all the data Successfuly").build());
	}
}
