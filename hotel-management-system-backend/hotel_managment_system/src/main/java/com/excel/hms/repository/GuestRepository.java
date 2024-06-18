package com.excel.hms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.hms.entity.Guest;

public interface GuestRepository extends JpaRepository<Guest, Integer>{
	Optional<Guest> findByEmail(String email);
}
