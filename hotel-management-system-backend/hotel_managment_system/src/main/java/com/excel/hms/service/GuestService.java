package com.excel.hms.service;

import java.util.List;

import com.excel.hms.dto.GuestDto;

public interface GuestService {

	String saveGuest(GuestDto dto);

	List<GuestDto> getAllGuestDetails();

	GuestDto updateGuest(GuestDto dto);

	String deleteGuest(GuestDto dto);
}
