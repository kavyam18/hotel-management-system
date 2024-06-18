package com.excel.hms.service;

import java.util.List;

import com.excel.hms.dto.ReservationDto;
import com.excel.hms.dto.ReservationDtoList;

public interface ReservationService {

	String saveReservation(ReservationDtoList dto);

	String closeReservation(ReservationDto dto);

	String cancelReservation(ReservationDto dto);

	ReservationDto getReservation(Integer reservationId);

	List<ReservationDto> getAllReservations();
}
