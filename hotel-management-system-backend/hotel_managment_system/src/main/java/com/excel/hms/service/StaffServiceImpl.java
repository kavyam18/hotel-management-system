package com.excel.hms.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.hms.dto.StaffDto;
import com.excel.hms.entity.Admin;
import com.excel.hms.entity.Staff;
import com.excel.hms.exception.AdminExistenceException;
import com.excel.hms.repository.AdminRepository;
import com.excel.hms.repository.StaffRepository;
import com.excel.hms.util.StaffUtil;

@Service
public class StaffServiceImpl implements StaffService {

	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private StaffRepository staffRepository;
	
	//---------------Register staff through admin------------------------
	@Override
	public String addStaffInfo(StaffDto staffDto)  {
		if (!isAdmin(staffDto.getAdminNo())) {
			throw new AdminExistenceException("Only admins are allowed to add staff details");
		}
		Staff staff = StaffUtil.dtoToEntity(staffDto);
		if (!staffRepository.findByStaffId(staffDto.getStaffId()).isPresent()) {
			Staff savedStaff = staffRepository.save(staff);
			return savedStaff.getStaffId();
		}
		throw new AdminExistenceException("Staff Id is already present");
	}
	private boolean isAdmin(Integer adminNo) {
		Optional<Admin> adminOptional = adminRepository.findById(adminNo);
		return adminOptional.isPresent();
	}

	//-----------------update staff password------------------
	@Override
	public StaffDto updateStaffPassword(StaffDto dto) {
		if(!isAdmin(dto.getAdminNo())) {
			throw new AdminExistenceException("Only Admins Can Update Staff Password");
		}
		Optional<Staff> optional = staffRepository.findByStaffId(dto.getStaffId());
		if(optional.isPresent()) {
			Staff password = optional.get();
			password = StaffUtil.updatePassword(password,dto);
			Staff save = staffRepository.save(password);
			return StaffUtil.dtoToEntity(save);
		}
		throw new AdminExistenceException("Password is Not Valid!");
	}
	
   //-----------------------Delete staff----------------------
	@Override
	public String deleteStaff(StaffDto dto) {
		if(!isAdmin(dto.getAdminNo())) {
			throw new AdminExistenceException("Only Admins Can Delete Staff Info ");
		}
		Optional<Staff> optional = staffRepository.findByStaffId(dto.getStaffId());
		if(optional.isPresent()) {
			staffRepository.delete(optional.get());
			return "Staff Deleted Succesfully!!";
		}
		throw new AdminExistenceException("Staff Id not Found!");
	}

}
