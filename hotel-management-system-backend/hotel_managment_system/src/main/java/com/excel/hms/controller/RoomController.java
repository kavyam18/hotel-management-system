package com.excel.hms.controller;

import static com.excel.hms.constant.RoomConstant.ROOMS_DETAILS_FETCHED_MESSAGE;
import static com.excel.hms.constant.RoomConstant.ROOM_DETAILS_FETCHED_MESSAGE;
import static com.excel.hms.constant.RoomConstant.ROOM_DETAILS_SAVED_MESSAGE;
import static com.excel.hms.constant.RoomConstant.ROOM_DETAILS_UPDATED_MESSAGE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excel.hms.dto.RoomDto;
import com.excel.hms.response.CommonResponse;
import com.excel.hms.service.RoomService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/v1/hotelmanagment")
@CrossOrigin
public class RoomController {

	@Autowired
	private RoomService roomService;
	
    //------------------------Add Rooms-----------------------------------------
	@PostMapping(path = "/rooms")
	public ResponseEntity<CommonResponse<String>> postRoomsDetails(@RequestBody RoomDto dto) {
		String room = roomService.saveRooms(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<String>builder().data(room).isError(false)
				.message(ROOM_DETAILS_SAVED_MESSAGE).build());
	}
    //--------------------------Fetch rooms by room number----------------------------
	@GetMapping(path = "/getroom")
	public ResponseEntity<CommonResponse<RoomDto>> getRoomsDetails(@RequestParam(name = "roomNumber") String roomNumber) {
	
		RoomDto room = roomService.getRooms(roomNumber);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<RoomDto>builder().data(room)
				.isError(false).message(ROOM_DETAILS_FETCHED_MESSAGE).build());
	}
   //-----------------------------Update rooms--------------------------------------
	@PutMapping(path = "/updateroom")
	public ResponseEntity<CommonResponse<RoomDto>> updateRoomsDetails(@RequestBody RoomDto dto) {
		RoomDto update = roomService.updateRooms(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<RoomDto>builder().data(update)
				.isError(false).message(ROOM_DETAILS_UPDATED_MESSAGE).build());
	}
    //----------------------------Fetch all rooms---------------------------------
	@GetMapping(path = "/getAllrooms")
	public ResponseEntity<CommonResponse<List<RoomDto>>> getAllRoomsDetails() {
		List<RoomDto> rooms = roomService.getAllRooms();
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<RoomDto>>builder().data(rooms)
				.isError(false).message(ROOMS_DETAILS_FETCHED_MESSAGE).build());
	}
}
