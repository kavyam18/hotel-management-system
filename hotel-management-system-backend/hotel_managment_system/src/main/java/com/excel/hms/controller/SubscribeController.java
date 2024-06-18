package com.excel.hms.controller;

import static com.excel.hms.constant.GuestConstant.SUBSCRIPTION_SUCCESSFULL;

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

import com.excel.hms.dto.SubscribeDto;
import com.excel.hms.response.CommonResponse;
import com.excel.hms.service.SubscribeService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/v1/hotelmanagment")
@CrossOrigin
public class SubscribeController {

	@Autowired
	private SubscribeService subscribeService;
	
	//-----------------------Guest Subscribe-------------------------
	@PostMapping(path = "/subscribe")
	public ResponseEntity<CommonResponse<String>> subscribe(@RequestBody SubscribeDto dto){
		String subscribe = subscribeService.addSubscribe(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<String>builder().data(subscribe)
				.isError(false).message(SUBSCRIPTION_SUCCESSFULL).build());
	}
	//------------------------Fetch all Subscribers----------------------------
	@GetMapping(path = "/getAllSubscribe")
	public ResponseEntity<CommonResponse<List<SubscribeDto>>> getSubscribes(){
		List<SubscribeDto> subscribes = subscribeService.getAllSubscribes();
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<List<SubscribeDto>>builder().data(subscribes)
				.isError(false).message("Subscribers data fetch Successfully").build());
	}
}
