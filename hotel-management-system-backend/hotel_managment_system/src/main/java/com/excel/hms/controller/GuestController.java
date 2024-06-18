package com.excel.hms.controller;

import static com.excel.hms.constant.GuestConstant.GUESTS_DETAILS_FETCHED_MESSAGE;
import static com.excel.hms.constant.GuestConstant.GUEST_DETAILS_DELETED_MESSAGE;
import static com.excel.hms.constant.GuestConstant.GUEST_DETAILS_SAVED_MESSAGE;
import static com.excel.hms.constant.GuestConstant.GUEST_DETAILS_UPDATED_MESSAGE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excel.hms.dto.GuestDto;
import com.excel.hms.response.CommonResponse;
import com.excel.hms.service.GuestService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/v1/hotelmanagment")
@CrossOrigin
public class GuestController {

	@Autowired
	private GuestService guestService;

	//-----------------------Guest Registration--------------------------------
	@PostMapping(path = "/guest")
	public ResponseEntity<CommonResponse<String>> postGuestDetails(@RequestBody GuestDto dto) {
		String guest = guestService.saveGuest(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<String>builder().data(guest)
				.isError(false).message(GUEST_DETAILS_SAVED_MESSAGE).build());
	}
	//--------------------------Fetch all Guest-------------------------------
	@GetMapping(path = "/getAllGuests")
	public ResponseEntity<CommonResponse<List<GuestDto>>> getAllGuestDetails() {
		List<GuestDto> rooms = guestService.getAllGuestDetails();
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<GuestDto>>builder().data(rooms)
				.isError(false).message(GUESTS_DETAILS_FETCHED_MESSAGE).build());
	}
	//------------------------update guest details-------------------------------
	@PutMapping(path = "/updateguest")
	public ResponseEntity<CommonResponse<GuestDto>> updateGuestDetails(@RequestBody GuestDto dto) {
		GuestDto update = guestService.updateGuest(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<GuestDto>builder().data(update)
				.isError(false).message(GUEST_DETAILS_UPDATED_MESSAGE).build());
	}
	//----------------------------Delete Guest-------------------------------------
	@DeleteMapping("/deleteguest")
	public ResponseEntity<CommonResponse<String>> deleteStaff(@RequestBody GuestDto dto){
		guestService.deleteGuest(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder()
				.isError(false).message(GUEST_DETAILS_DELETED_MESSAGE).build());
	}
}
