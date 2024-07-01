package com.excel.hms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import static com.excel.hms.constant.AdminConstant.ADMIN_NAME_IS_ALREADY_PRESENT;
import static com.excel.hms.constant.AdminConstant.INVALID_PASSWORD;
import static com.excel.hms.constant.AdminConstant.INVALID_USERNAME;
import static com.excel.hms.constant.AdminConstant.ADMIN_ID_NOT_FOUND;
import static com.excel.hms.constant.AdminConstant.PASSWORD_IS_NOT_VALID;

import com.excel.hms.dto.AdminDto;
import com.excel.hms.entity.Admin;
import com.excel.hms.exception.AdminExistenceException;
import com.excel.hms.exception.AdminInvalidPasswordException;
import com.excel.hms.exception.AdminInvalidUsernameException;
import com.excel.hms.exception.AdminNotFoundException;
import com.excel.hms.repository.AdminRepository;
import com.excel.hms.util.AdminUtil;


@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	 //-----------------Admin Registeration-------------------
	@Override
	public Integer addAdminInfo(AdminDto dto) {
		Admin admin = AdminUtil.dtoToEntity(dto);
		if(!adminRepository.findByAdminName(dto.getAdminName()).isPresent()) 
		{
			admin.setPassword(bCryptPasswordEncoder.encode(dto.getPassword()));
			Admin save = adminRepository.save(admin);
			return save.getAdminNo();
		}
		throw new AdminExistenceException(ADMIN_NAME_IS_ALREADY_PRESENT);
	}
	
	//--------------Admin Login-----------------------------
		@Override
		public AdminDto adminLogin(AdminDto dto) {
			Optional<Admin> optional = adminRepository.findByAdminName(dto.getAdminName());
			if (optional.isPresent()) {
				Admin admin = optional.get();
//				if (admin.getPassword().equals(dto.getPassword())) {
				if(bCryptPasswordEncoder.matches(dto.getPassword(), admin.getPassword())) {
					return AdminUtil.adminLogin(admin.getAdminName());
				} else {
					throw new AdminInvalidPasswordException(INVALID_PASSWORD);
				}
			}
			throw new AdminInvalidUsernameException(INVALID_USERNAME);
		}

		//--------------------update Admin Password by Admin number----------------
		@Override
		public AdminDto updateAdminPassword(AdminDto dto) {
			Optional<Admin> optional = adminRepository.findByAdminNo(dto.getAdminNo());
			if(optional.isPresent()) {
				Admin password = optional.get();
				password = AdminUtil.updatepassword(password,dto);
				Admin save = adminRepository.save(password);
				return AdminUtil.dtoToEntity(save);
			}
			throw new AdminInvalidPasswordException(PASSWORD_IS_NOT_VALID);
		}

		//----------------Fetch all admins----------------------------
		@Override
		public List<AdminDto> getAdmin() {
			return adminRepository.findAll().stream().map(x->AdminDto.builder().adminNo(x.getAdminNo()).adminName(x.getAdminName()).password(x.getPassword()).roleType(x.getRoleType()).build()).toList();
		}

		//---------------Fetch Admin by adminId------------------------
		@Override
		public AdminDto getAdminById(AdminDto dto) {
			Optional<Admin> optional = adminRepository.findByAdminNo(dto.getAdminNo());
			if(optional.isPresent()) {
				Admin admin = optional.get();
				return AdminUtil.dtoToGetEntity(admin);
			}else {
				throw new AdminNotFoundException(ADMIN_ID_NOT_FOUND);
			}
		}
}
