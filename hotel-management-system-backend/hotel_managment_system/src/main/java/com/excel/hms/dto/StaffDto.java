package com.excel.hms.dto;
import com.excel.hms.enums.Department;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StaffDto {

	private Integer adminNo;
	private Integer staffNo;
	private String staffId;
	private String staffName;
	private Department department;
	private String password;
}

