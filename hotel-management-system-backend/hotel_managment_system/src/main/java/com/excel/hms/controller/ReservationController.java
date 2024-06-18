package com.excel.hms.controller;

import static com.excel.hms.constant.ReservationConstant.RESERVATIONS_DETAILS_FETCHED_MESSAGE;
import static com.excel.hms.constant.ReservationConstant.RESERVATION_CANCELLED_MESSAGE;
import static com.excel.hms.constant.ReservationConstant.RESERVATION_CLOSED_MESSAGE;
import static com.excel.hms.constant.ReservationConstant.RESERVATION_DETAILS_FETCHED_MESSAGE;
import static com.excel.hms.constant.ReservationConstant.RESERVATION_DETAILS_SAVED_MESSAGE;

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

import com.excel.hms.dto.ReservationDto;
import com.excel.hms.dto.ReservationDtoList;
import com.excel.hms.response.CommonResponse;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/v1/hotelmanagment")
@CrossOrigin
public class ReservationController {

	@Autowired
	private com.excel.hms.service.ReservationService reservationService;
	
	//---------------------------Room Reservation--------------------------------
	@PostMapping(path = "/reservation")
	public ResponseEntity<CommonResponse<String>> postRervationDetails(@RequestBody ReservationDtoList dto) {
		String room = reservationService.saveReservation(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<String>builder().data(room).isError(false)
				.message(RESERVATION_DETAILS_SAVED_MESSAGE).build());
	}
	//--------------------------Close Reservation----------------------------------
	@PutMapping(path = "/closeReservation")
	public ResponseEntity<CommonResponse<String>> updateReservationsDetails(@RequestBody ReservationDto dto) {
		String update = reservationService.closeReservation(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<String>builder().data(update)
				.isError(false).message(RESERVATION_CLOSED_MESSAGE).build());
	}
	//-------------------------------Cancel Reservation----------------------------
	@PutMapping(path = "/cancelReservation")
	public ResponseEntity<CommonResponse<String>> updateReservationsByGuestDetails(@RequestBody ReservationDto dto) {
		String update = reservationService.cancelReservation(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<String>builder().data(update)
				.isError(false).message(RESERVATION_CANCELLED_MESSAGE).build());
	}
	//----------------------------Fetch Reservation by ReservationId------------------------------
	@GetMapping(path = "/getreservation")
	public ResponseEntity<CommonResponse<ReservationDto>> getReservationDetails(@RequestParam(name = "reservationId") Integer reservationId) {
		ReservationDto reservation = reservationService.getReservation(reservationId);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<ReservationDto>builder().data(reservation)
				.isError(false).message(RESERVATION_DETAILS_FETCHED_MESSAGE).build());
	}
	//---------------------------Fetch all reservations---------------------------------
	@GetMapping(path = "/getallreservations")
	public ResponseEntity<CommonResponse<List<ReservationDto>>> getAllReservationsDetails() {
		List<ReservationDto> rooms = reservationService.getAllReservations();
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<ReservationDto>>builder().data(rooms)
				.isError(false).message(RESERVATIONS_DETAILS_FETCHED_MESSAGE).build());
	}
}
