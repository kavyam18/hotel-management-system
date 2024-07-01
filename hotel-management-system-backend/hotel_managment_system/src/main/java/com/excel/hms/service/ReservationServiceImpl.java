package com.excel.hms.service;

import static com.excel.hms.constant.GuestConstant.GUEST_EMAIL_NOTFOUND_MESSAGE;
import static com.excel.hms.constant.ReservationConstant.RESERVATION_CLOSED_MESSAGE;
import static com.excel.hms.constant.ReservationConstant.RESERVATION_DETAILS_SAVED_MESSAGE;
import static com.excel.hms.constant.ReservationConstant.RESERVATION_NOTFOUND_MESSAGE;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.hms.dto.ReservationDto;
import com.excel.hms.dto.ReservationDtoList;
import com.excel.hms.entity.Guest;
import com.excel.hms.entity.Reservation;
import com.excel.hms.entity.Room;
import com.excel.hms.exception.GuestEmailNotFoundException;
import com.excel.hms.exception.GuestExistenceException;
import com.excel.hms.exception.ReservationCancelException;
import com.excel.hms.exception.ReservationIdNotFoundException;
import com.excel.hms.exception.ReservationsNotFetchException;
import com.excel.hms.exception.RoomIdNotFoundException;
import com.excel.hms.repository.GuestRepository;
import com.excel.hms.repository.ReservationRepository;
import com.excel.hms.repository.RoomRepository;
import com.excel.hms.util.ObjectUtil;

import jakarta.persistence.NonUniqueResultException;

@Service
public class ReservationServiceImpl implements ReservationService {

	@Autowired
	private GuestRepository guestRepository;

	@Autowired
	private RoomRepository roomRepository;

	@Autowired
	private ReservationRepository reservationRepository;
	
	//---------------------Room Reservation by guest email Id----------------
	@Override
	public String saveReservation(ReservationDtoList dto) {
	    Optional<Guest> optional = guestRepository.findByEmail(dto.getEmail());
	    if (optional.isPresent()) {
	        Guest guest = optional.get();
	        Optional<Reservation> activeReservation = guest.getReservations().stream()
	            .filter(reservation -> !reservation.isCancelled() && !reservation.isClosed())
	            .findFirst();
	        
	        if (activeReservation.isPresent()) {
	            throw new GuestExistenceException("Guest already has an active reservation.");
	        } else {
	            Reservation reservation = ObjectUtil.dtoToReservationEntity(dto);
	            reservation.setGuest(guest);
	            List<Room> roomsList = dto.getRooms().stream().map(roomId -> {
	                Optional<Room> optionalRoom = roomRepository.findById(roomId);
	                return optionalRoom.orElseThrow(() -> new RoomIdNotFoundException("Room with ID " + roomId + " not found"));
	            }).toList();
	            roomsList.forEach(room -> {
	                room.setAvailable(false);
	                room.getReservations().add(reservation);
	            });
	            
	            reservation.setRooms(roomsList);
	            guest.getReservations().add(reservation);
	            
	            guestRepository.save(guest);
	            roomRepository.saveAll(roomsList);
	            return RESERVATION_DETAILS_SAVED_MESSAGE;
	        }
	    } else {
	        throw new GuestEmailNotFoundException(GUEST_EMAIL_NOTFOUND_MESSAGE);
	    }
	}
    //---------------------close reservation -----------------------------
	@Override
	public String closeReservation(ReservationDto dto) {
		try {
			Optional<Reservation> resOptional= reservationRepository.findByReservationId(dto.getReservationId());
			if(resOptional.isPresent()) {
				Reservation reservation = resOptional.get();
				reservation.setClosed(true);
				reservationRepository.save(reservation);
				return RESERVATION_CLOSED_MESSAGE;
			} else {
				return RESERVATION_NOTFOUND_MESSAGE;
			}
		} catch (NonUniqueResultException e) {
			return "Multiple reservations found for the given ID";

		} catch (Exception e) {
			return "An error occurred: " + e.getMessage();
		}
	}
    //------------------cancel the reservation-----------------------------	
	@Override
	public String cancelReservation(ReservationDto dto) {
	    Optional<Reservation> optionalReservation = reservationRepository.findByReservationId(dto.getReservationId());
	    if (optionalReservation.isPresent()) {
	        Reservation reservation = optionalReservation.get();
	        if (reservation.isCancelled() || reservation.isClosed()) {
	            throw new ReservationCancelException("Reservation is already cancelled or closed.");
	        }
	        List<Room> rooms = reservation.getRooms();
	        rooms.forEach(room -> {
	            room.setAvailable(true); 
	            room.getReservations().remove(reservation); 
	        });
	        reservation.setCancelled(true);
	        reservationRepository.save(reservation);
	        roomRepository.saveAll(rooms);
	    } else {
	        throw new ReservationIdNotFoundException("Reservation not found with ID: " );
	    }
		return null;
	}
    //------------------------Fetch all room reservation by reservation id-----------------------	
	@Override
	public ReservationDto getReservation(Integer reservationId) {
		Optional<Reservation> optional	=reservationRepository.findByReservationId(reservationId);
		if(optional.isPresent()) {
			Reservation reservation=optional.get();
			ReservationDto reservation1=ObjectUtil.ReservationEntityToDto(reservation);
			return reservation1;
		}
		throw new ReservationIdNotFoundException(RESERVATION_NOTFOUND_MESSAGE);
	}
	//---------------------Fetch all reservation----------------------
	@Override
	public List<ReservationDto> getAllReservations() {
		try {
			return reservationRepository.findAll().stream()
					.map(ObjectUtil::ReservationEntityToDto).toList();
		} catch (Exception e) {
			throw new ReservationsNotFetchException("Failed to retrieve reservations: " + e.getMessage());
		}
	}
}
