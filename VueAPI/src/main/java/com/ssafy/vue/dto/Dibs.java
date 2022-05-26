package com.ssafy.vue.dto;

public class Dibs {
	private int dibsNo;
	private String userid;
	private String aptName;
	private String la;
	private String ma;
	private int buildyear;
	private int floor;
	private String address;
	private String addressCode;
	private String serialNumber;
	public Dibs() {
		super();
	}
	public Dibs(String userid, String aptName, String la, String ma, int buildyear, int floor, String address,
			String addressCode, String serialNumber) {		
		this.userid = userid;
		this.aptName = aptName;
		this.la = la;
		this.ma = ma;
		this.buildyear = buildyear;
		this.floor = floor;
		this.address = address;
		this.addressCode = addressCode;
		this.serialNumber = serialNumber;
	}
	public Dibs(int dibsNo, String userid, String aptName, String la, String ma, int buildyear, int floor, String address,
			String addressCode, String serialNumber) {
		super();
		this.dibsNo = dibsNo;
		this.userid = userid;
		this.aptName = aptName;
		this.la = la;
		this.ma = ma;
		this.buildyear = buildyear;
		this.floor = floor;
		this.address = address;
		this.addressCode = addressCode;
		this.serialNumber = serialNumber;
	}
	public int getDibsNo() {
		return dibsNo;
	}
	public void setDibsNo(int dibsNo) {
		this.dibsNo = dibsNo;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getAptName() {
		return aptName;
	}
	public void setAptName(String aptName) {
		this.aptName = aptName;
	}
	public String getLa() {
		return la;
	}
	public void setLa(String la) {
		this.la = la;
	}
	public String getMa() {
		return ma;
	}
	public void setMa(String ma) {
		this.ma = ma;
	}
	public int getBuildyear() {
		return buildyear;
	}
	public void setBuildyear(int buildyear) {
		this.buildyear = buildyear;
	}
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAddressCode() {
		return addressCode;
	}
	public void setAddressCode(String addressCode) {
		this.addressCode = addressCode;
	}
	
	public String getSerialNumber() {
		return serialNumber;
	}
	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}
	@Override
	public String toString() {
		return "Dibs [dibsNo=" + dibsNo + ", userid=" + userid + ", aptName=" + aptName + ", la=" + la + ", ma=" + ma
				+ ", buildyear=" + buildyear + ", floor=" + floor + ", address=" + address + ", addressCode="
				+ addressCode + ", serialNumber=" + serialNumber + "]";
	}
	
	
	
}
