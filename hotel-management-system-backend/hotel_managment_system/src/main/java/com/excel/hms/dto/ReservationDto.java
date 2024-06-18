package com.excel.hms.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter 
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class ReservationDto {

	private Integer reservationId;
	private LocalDate checkInDate;
	private LocalDate checkOutDate;
	private double totalAmount;
	private boolean isCancelled;
	private boolean isClosed;
	
	private String email;
	
}
