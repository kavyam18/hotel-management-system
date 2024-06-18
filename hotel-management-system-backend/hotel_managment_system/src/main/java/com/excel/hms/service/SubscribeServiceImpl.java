package com.excel.hms.service;

import static com.excel.hms.constant.GuestConstant.DUPLICATE_SUBSCRIPTION_MESSAGE;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.hms.dto.SubscribeDto;
import com.excel.hms.entity.Subscribe;
import com.excel.hms.exception.HotelException;
import com.excel.hms.repository.SubscribeRepository;

@Service
public class SubscribeServiceImpl implements SubscribeService{

	@Autowired
	private SubscribeRepository subscribeRepository;
	
	//----------------------Guest Subscribe-----------------------
	@Override
	public String addSubscribe(SubscribeDto dto) {
		Optional<Subscribe> optional = subscribeRepository.findByEmailId(dto.getEmailId());
		if(!optional.isPresent()) {
			Subscribe subscribe = Subscribe.builder().emailId(dto.getEmailId()).build();
			 Subscribe subscribes = subscribeRepository.save(subscribe);
			return subscribes.getEmailId();
		}
		throw new HotelException(DUPLICATE_SUBSCRIPTION_MESSAGE);
	}

	//------------------------Fetch all subscribers--------------------------
	@Override
	public List<SubscribeDto> getAllSubscribes() {
		return subscribeRepository.findAll().stream().map(x->SubscribeDto.builder().subscribeId(x.getSubscribeId())
				.emailId(x.getEmailId()).build()).toList();
	}
}
