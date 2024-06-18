package com.excel.hms.util;
import com.excel.hms.dto.StaffDto;
import com.excel.hms.entity.Staff;

public class StaffUtil {

	public StaffUtil() {

	}
	public static Staff dtoToEntity(StaffDto dto) {
		return Staff.builder().staffId(dto.getStaffId()).staffName(dto.getStaffName()).password(dto.getPassword()).department(dto.getDepartment()).build();
	}
	public static StaffDto dtoToEntity(Staff save) {

		return StaffDto.builder().staffId(save.getStaffId()).staffName(save.getStaffName()).staffNo(save.getStaffNo()).department(save.getDepartment()).password(save.getPassword()).build();
	}
	public static Staff updatePassword(Staff password, StaffDto dto) {
		password.setPassword(dto.getPassword());
		return password;
	}

}

