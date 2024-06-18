package com.excel.hms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Builder
public class RoomDto {
	private String roomNumber;
	private String type;
	private Double rate;
	private String description;
	private boolean isAvailable;
}
