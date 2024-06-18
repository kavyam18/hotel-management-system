package com.excel.hms.service;

import java.util.List;

import com.excel.hms.dto.SubscribeDto;

public interface SubscribeService {

	String addSubscribe(SubscribeDto dto);

	List<SubscribeDto> getAllSubscribes();

}
