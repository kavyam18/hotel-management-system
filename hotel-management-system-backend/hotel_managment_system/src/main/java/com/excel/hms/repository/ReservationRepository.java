package com.excel.hms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.hms.entity.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer>{



	Optional<Reservation> findByReservationId(Integer reservationId);
}
