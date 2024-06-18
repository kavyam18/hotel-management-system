package com.excel.hms.util;

import com.excel.hms.dto.AdminDto;
import com.excel.hms.entity.Admin;

public class AdminUtil {

	public AdminUtil() {
		
	}
	
	public static Admin dtoToEntity(AdminDto dto) {
		return Admin.builder().adminNo(dto.getAdminNo()).adminName(dto.getAdminName()).password(dto.getPassword()).roleType(dto.getRoleType()).build();
	}

	public static Admin updatepassword(Admin password, AdminDto dto) {
		password.setPassword(dto.getPassword());
		return password;
	}

	public static AdminDto dtoToEntity(Admin save) {
		
		return AdminDto.builder().adminName(save.getAdminName()).password(save.getPassword()).roleType(save.getRoleType()).build();
	}

	public static AdminDto dtoToGetEntity(Admin admin) {
	
		return AdminDto.builder().adminNo(admin.getAdminNo()).adminName(admin.getAdminName())
				.password(admin.getPassword()).roleType(admin.getRoleType()).build();
	}

	public static AdminDto adminLogin(String adminName) {
		return AdminDto.builder()
				.adminName(adminName)
				.build();
	}
	
}

