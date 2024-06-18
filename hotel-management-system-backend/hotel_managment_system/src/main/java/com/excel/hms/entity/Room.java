package com.excel.hms.entity;


import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Entity
@Builder
@Table(name="rooms_table")
public class Room {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "room_id")
	private Integer roomId;
	
	@Column(name = "room_number",unique = true)
	private String roomNumber;
	
	private String type;
	
	private Double rate;
	
	private String description;
	
	@Column(name = "is_available")
	private boolean isAvailable;
	
	@ManyToMany(fetch =FetchType.EAGER,cascade = CascadeType.DETACH.MERGE.PERSIST.REFRESH,mappedBy = "rooms")
	private List<Reservation> reservations;
}
