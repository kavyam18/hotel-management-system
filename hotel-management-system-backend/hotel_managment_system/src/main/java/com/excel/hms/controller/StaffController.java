package com.excel.hms.controller;

import static com.excel.hms.constant.AdminConstant.STAFF_DELETED_MESSAGE;
import static com.excel.hms.constant.AdminConstant.STAFF_INFORMATION_SAVED_MESSAGE;
import static com.excel.hms.constant.AdminConstant.STAFF_PASSWORD_UPDATED_MESSAGE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excel.hms.dto.StaffDto;
import com.excel.hms.response.CommonResponse;
import com.excel.hms.service.StaffService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/v1/hotelmanagment")
@CrossOrigin
public class StaffController {

	@Autowired
	private StaffService staffService;
	
	//-----------------------Staff Register---------------------------------
	@PostMapping("/sinfo")
	public ResponseEntity<CommonResponse<String>> postStaffInfo(@RequestBody StaffDto dto){
		String staff = staffService.addStaffInfo(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<String>builder().data(staff)
				.isError(false).message(STAFF_INFORMATION_SAVED_MESSAGE).build());
	}
	//----------------------------update staff password---------------------------------
	@PutMapping("/updateStaff")
	public ResponseEntity<CommonResponse<StaffDto>> updateStaffPassword(@RequestBody StaffDto dto){
		StaffDto staffPass = staffService.updateStaffPassword(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponse.<StaffDto>builder()
				.data(staffPass).isError(false).message(STAFF_PASSWORD_UPDATED_MESSAGE).build());
	}
	//--------------------------Delete staff----------------------------------------------
	@DeleteMapping("/staffDelete")
	public ResponseEntity<CommonResponse<String>> deleteStaff(@RequestBody StaffDto dto){
		staffService.deleteStaff(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder()
				.isError(false).message(STAFF_DELETED_MESSAGE).build());
	}
}
