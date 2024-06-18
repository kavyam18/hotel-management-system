package com.excel.hms.service;

import com.excel.hms.dto.StaffDto;

public interface StaffService {

	String addStaffInfo(StaffDto dto);

	StaffDto updateStaffPassword(StaffDto dto);

	String deleteStaff(StaffDto dto);
}
