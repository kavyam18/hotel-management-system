package com.excel.hms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FeedbackDto {

	
	private Integer feedbackId;
	
	private String name;
	
	private String email;
	
	private String subject;
	
	private String message;
}
