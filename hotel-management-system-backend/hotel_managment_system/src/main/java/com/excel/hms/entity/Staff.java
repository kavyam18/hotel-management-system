package com.excel.hms.entity;


import com.excel.hms.enums.Department;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "staff")
@Builder
public class Staff {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer staffNo;

	private String staffId;

	private String staffName;

	@Enumerated(EnumType.STRING)
	private Department department;

	private String password;
}


