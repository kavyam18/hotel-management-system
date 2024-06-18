package com.excel.hms.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Department {

	RECEPTIONIST("RECEPTIONIST"),CLEANING("CLEANING"),OTHERS("OTHERS");

	private final String department;
}
