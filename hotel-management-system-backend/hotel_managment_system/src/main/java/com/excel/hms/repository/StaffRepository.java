package com.excel.hms.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.excel.hms.entity.Staff;
public interface StaffRepository extends JpaRepository<Staff, Integer> {
	Optional<Staff> findByStaffId(String staffId);

}

