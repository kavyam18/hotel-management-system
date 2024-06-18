package com.excel.hms.service;

import java.util.List;

import com.excel.hms.dto.FeedbackDto;

public interface FeedbackService {

	String addMessage(FeedbackDto dto);

	List<FeedbackDto> getAllData();

}
