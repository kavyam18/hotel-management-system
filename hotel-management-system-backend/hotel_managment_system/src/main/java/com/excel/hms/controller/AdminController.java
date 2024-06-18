package com.excel.hms.controller;

import static com.excel.hms.constant.AdminConstant.ADMINS_DETAILS_FETCH_MESSAGE;
import static com.excel.hms.constant.AdminConstant.ADMIN_DETAILS_FETCH_MESSAGE;
import static com.excel.hms.constant.AdminConstant.ADMIN_LOGIN_MESSAGE;
import static com.excel.hms.constant.AdminConstant.ADMIN_REGISTER_MESSAGE;
import static com.excel.hms.constant.AdminConstant.PASSWORD_CHANGED_MESSAGE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excel.hms.dto.AdminDto;
import com.excel.hms.response.CommonResponse;
import com.excel.hms.service.AdminService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/v1/hotelmanagment")
@CrossOrigin
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	//-------------------Register Admin--------------------
	@PostMapping("/register")
	public ResponseEntity<CommonResponse<Integer>>postAdminInfo(@RequestBody AdminDto dto){
		Integer adminId = adminService.addAdminInfo(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<Integer>builder().data(adminId)
				.isError(false).message(ADMIN_REGISTER_MESSAGE).build());	
	}

	//--------------------Admin Login--------------------------
	@PostMapping("/login")
	public ResponseEntity<CommonResponse<AdminDto>>postAdminLogin(@RequestBody AdminDto dto){
	AdminDto adminName = adminService.adminLogin(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<AdminDto>builder().data(adminName)
				.isError(false).message(ADMIN_LOGIN_MESSAGE).build());	
	}
	//-------------------------update Admin Password---------------------------
	@PutMapping("/update")
	public ResponseEntity<CommonResponse<AdminDto>> updateAdminPassword(@RequestBody AdminDto dto){
		AdminDto adminPass = adminService.updateAdminPassword(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<AdminDto>builder().data(adminPass)
				.isError(false).message(PASSWORD_CHANGED_MESSAGE).build());
	}
	//--------------------------Fetch all admins--------------------------------
	@GetMapping("/getAll")
	public ResponseEntity<CommonResponse<List<AdminDto>>>fetchAllAdminInfo(){
		List<AdminDto> dto = adminService.getAdmin();
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<AdminDto>>builder().data(dto)
				.isError(false).message(ADMINS_DETAILS_FETCH_MESSAGE).build());
	}
	//------------------------Fetch admin by id-----------------------------
	@GetMapping("/getById")
	public ResponseEntity<CommonResponse<AdminDto>>fetchById(@RequestBody AdminDto dto){
		AdminDto admin = adminService.getAdminById(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<AdminDto>builder().data(admin)
				.isError(false).message(ADMIN_DETAILS_FETCH_MESSAGE).build());
	}
}
