package com.excel.hms.service;

import java.util.List;

import com.excel.hms.dto.AdminDto;

public interface AdminService {

	Integer addAdminInfo(AdminDto dto);

	AdminDto adminLogin(AdminDto dto);

	AdminDto updateAdminPassword(AdminDto dto);

	List<AdminDto> getAdmin();

	AdminDto getAdminById(AdminDto dto);

}
