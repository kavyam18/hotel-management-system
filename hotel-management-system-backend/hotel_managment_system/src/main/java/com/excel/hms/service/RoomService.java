package com.excel.hms.service;

import java.util.List;

import com.excel.hms.dto.RoomDto;

public interface RoomService {

	String saveRooms(RoomDto dto);

	RoomDto getRooms(String roomNumber);

	RoomDto updateRooms(RoomDto dto);

	List<RoomDto> getAllRooms();
}
