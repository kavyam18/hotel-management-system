package com.excel.hms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.hms.entity.Subscribe;

public interface SubscribeRepository extends JpaRepository<Subscribe, Integer> {
	
	Optional<Subscribe> findByEmailId(String emailId);

}
