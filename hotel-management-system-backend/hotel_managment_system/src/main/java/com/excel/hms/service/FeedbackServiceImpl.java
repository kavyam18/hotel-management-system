package com.excel.hms.service;

import static com.excel.hms.constant.GuestConstant.GUEST_EMAILID_NOT_FOUND;
import static com.excel.hms.constant.GuestConstant.GUEST_MESSAGE_SAVED_SUCCESS;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.hms.dto.FeedbackDto;
import com.excel.hms.entity.Feedback;
import com.excel.hms.entity.Guest;
import com.excel.hms.exception.HotelException;
import com.excel.hms.repository.FeedbackRepository;
import com.excel.hms.repository.GuestRepository;
import com.excel.hms.util.ObjectUtil;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	private GuestRepository guestRepository;
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	
	//-------------------Feedback by guest emailId-------------------------
	@Override
	public String addMessage(FeedbackDto dto) {
	
	   Optional<Guest> optional = guestRepository.findByEmail(dto.getEmail());
	   if(optional.isPresent()) {
			Feedback contact = ObjectUtil.dtoToContactEntity(dto);
			feedbackRepository.save(contact);
		     return GUEST_MESSAGE_SAVED_SUCCESS;
	   }
		throw new HotelException(GUEST_EMAILID_NOT_FOUND);
	}
	
    //------------------Fetch all  Feedback-----------------------------
	@Override
	public List<FeedbackDto> getAllData() {
		return feedbackRepository.findAll().stream().map(x->FeedbackDto.builder().feedbackId(x.getFeedbackId())
				.name(x.getName()).email(x.getEmail()).subject(x.getSubject()).message(x.getMessage()).build()).toList();
	}
}
