package com.excel.hms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Builder
public class GuestDto {
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNumber;
	private String address;
	private String city;
	private String state;
	private Integer zipCode;
}
