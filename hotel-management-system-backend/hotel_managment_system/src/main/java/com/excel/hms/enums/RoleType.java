package com.excel.hms.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum RoleType {

	ADMIN("ADMIN"),STAFF("STAFF");

	private final String roleType;
}

