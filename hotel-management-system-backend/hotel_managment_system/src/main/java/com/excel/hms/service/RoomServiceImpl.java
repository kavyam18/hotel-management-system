package com.excel.hms.service;

import static com.excel.hms.constant.RoomConstant.ROOMNUMBER_FOUND_MESSAGE;
import static com.excel.hms.constant.RoomConstant.ROOMNUMBER_NOTFOUND_MESSAGE;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.hms.dto.RoomDto;
import com.excel.hms.entity.Room;
import com.excel.hms.exception.HotelException;
import com.excel.hms.repository.RoomRepository;
import com.excel.hms.util.ObjectUtil;

@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	private RoomRepository roomRepository;

	//-------------------------Add Rooms ---------------------------
	@Override
	public String saveRooms(RoomDto dto) {
		if(!roomRepository.findByRoomNumber(dto.getRoomNumber()).isPresent()) {
			Room room=ObjectUtil.dtoToRoomEntity(dto);
			room.setAvailable(true);
			Room room1=roomRepository.save(room);
			return room1.getRoomNumber();
		}
		throw new HotelException(ROOMNUMBER_FOUND_MESSAGE);
	}

	//------------------------Fetch room details by room number------------
	@Override
	public RoomDto getRooms(String roomNumber) {
		Optional<Room> optional	=roomRepository.findByRoomNumber(roomNumber);
		if(optional.isPresent()) {
			Room rooms=optional.get();
			RoomDto room=ObjectUtil.RoomEntityToDto(rooms);
			return room;
		}
		throw new HotelException(ROOMNUMBER_NOTFOUND_MESSAGE);
	}

	//--------------------------update the room details by room number-----------
	@Override
	public RoomDto updateRooms(RoomDto dto) {
		Optional<Room> optional	=roomRepository.findByRoomNumber(dto.getRoomNumber());
		if(optional.isPresent()) {
			Room room=optional.get();
			room=ObjectUtil.updateValues(room,dto);
			Room save=roomRepository.save(room);
			return ObjectUtil.RoomEntityToDto(save);
		}
		throw new HotelException(ROOMNUMBER_NOTFOUND_MESSAGE);
	}

	//----------------------Fetch all rooms details-------------------
	@Override
	public List<RoomDto> getAllRooms() {
		try {
			return roomRepository.findAll().stream()
					.map(ObjectUtil::RoomEntityToDto).toList();
		} catch (Exception e) {
			throw new HotelException("Failed to retrieve rooms: " + e.getMessage());
		}
	}
}
