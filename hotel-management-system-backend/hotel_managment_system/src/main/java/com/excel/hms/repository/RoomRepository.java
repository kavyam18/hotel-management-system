package com.excel.hms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.hms.entity.Room;

public interface RoomRepository extends JpaRepository<Room, Integer>{
	Optional<Room> findByRoomNumber(String roomNumber);
	Optional<Room> findByRoomId(Integer roomId);
}
