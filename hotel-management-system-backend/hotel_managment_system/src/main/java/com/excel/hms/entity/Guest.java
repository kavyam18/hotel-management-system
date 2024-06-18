package com.excel.hms.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Entity
@Builder
@Table(name="guests_table")
public class Guest {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer guestId;
	
	
	private String firstName;
	private String lastName;
	@Column(unique = true)
	private String email;
	@Column(unique = true)
	private String phoneNumber;
	private String address;
	private String city;
	private String state;
	private Integer zipCode;
	
	@OneToMany(fetch =FetchType.EAGER,cascade = CascadeType.ALL,mappedBy = "guest")
	private List<Reservation> reservations;
}
