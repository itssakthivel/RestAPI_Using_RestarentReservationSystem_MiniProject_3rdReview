package com.example.demo.modelproject;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ModelSeat {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	public int getId() {
		return id;
		
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(long mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public int getMembers() {
		return members;
	}
	public void setMembers(int members) {
		this.members = members;
	}
	public String getFoodtype() {
		return foodtype;
	}
	public void setFoodtype(String foodtype) {
		this.foodtype = foodtype;
	}
	public ModelSeat(int id, String name, String email, long mobilenumber, int members, String foodtype) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.mobilenumber = mobilenumber;
		this.members = members;
		this.foodtype = foodtype;
	}
	public ModelSeat() {
		super();
		// TODO Auto-generated constructor stub
	}
	private String name;
	private String email;
	private long mobilenumber;
	private int members;
	private String foodtype;
	}
