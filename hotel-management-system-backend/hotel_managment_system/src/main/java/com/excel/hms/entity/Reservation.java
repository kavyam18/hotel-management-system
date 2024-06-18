package com.excel.hms.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Entity
@Builder
@Table(name="reservations_table")
public class Reservation {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer reservationId;
	
	private LocalDate checkInDate;
	private LocalDate checkOutDate;
	private double totalAmount;
	private boolean isCancelled;
	private boolean isClosed;
	private String email;

	@JoinColumn(name = "guestId")
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.ALL)
	private Guest guest;

	@ManyToMany(fetch =FetchType.EAGER,cascade = CascadeType.DETACH.MERGE.PERSIST.REFRESH)
	private List<Room> rooms;

}
