package com.excel.hms.service;

import static com.excel.hms.constant.GuestConstant.GUEST_DETAILS_DELETED_MESSAGE;
import static com.excel.hms.constant.GuestConstant.GUEST_EMAIL_FOUND_MESSAGE;
import static com.excel.hms.constant.GuestConstant.GUEST_EMAIL_NOTFOUND_MESSAGE;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.hms.dto.GuestDto;
import com.excel.hms.entity.Guest;
import com.excel.hms.exception.GuestEmailNotFoundException;
import com.excel.hms.repository.GuestRepository;
import com.excel.hms.util.ObjectUtil;

@Service
public class GuestServiceImpl implements GuestService {

	@Autowired
	private GuestRepository guestRepository;

	//---------------------Register the guest details-----------------------
	@Override
	public String saveGuest(GuestDto dto) {
		if(!guestRepository.findByEmail(dto.getEmail()).isPresent()) {
			Guest guest	=ObjectUtil.dtoToEntity(dto);
			Guest guest1=guestRepository.save(guest);
			return guest1.getEmail();
		}
		throw new GuestEmailNotFoundException(GUEST_EMAIL_FOUND_MESSAGE);
	}

	//-------------------Fetch All Guest Details---------------------------
	@Override
	public List<GuestDto> getAllGuestDetails() {
		try {
			return guestRepository.findAll().stream()
					.map(ObjectUtil::GuestEntityToDto).toList();
		} catch (Exception e) {
			throw new GuestEmailNotFoundException("Failed to retrieve Guests: " + e.getMessage());
		}
	}

	//------------------Update Guest Details-----------------------------
	@Override
	public GuestDto updateGuest(GuestDto dto) {
		Optional<Guest> optional=guestRepository.findByEmail(dto.getEmail());
		if(optional.isPresent()) {
			Guest guest=optional.get();
			guest=ObjectUtil.updateGuest(guest,dto);
			Guest save=guestRepository.save(guest);
			return ObjectUtil.GuestEntityToDto(save);
		}
		throw new GuestEmailNotFoundException(GUEST_EMAIL_NOTFOUND_MESSAGE);
	}

	//----------------------Delete the guest------------------------
	@Override
	public String deleteGuest(GuestDto dto) {
	
		Optional<Guest> optional=guestRepository.findByEmail(dto.getEmail());
		if(optional.isPresent()) {
			Guest guest=optional.get();
			guestRepository.delete(guest);
			return GUEST_DETAILS_DELETED_MESSAGE;
		}
		throw new GuestEmailNotFoundException(GUEST_EMAIL_NOTFOUND_MESSAGE);
	}
}
