package com.ssafy.vue.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.vue.dto.Dibs;

public interface DibsService {
	List<Dibs> selectList(String userid) throws SQLException;	
	Dibs selectOne(int dibsNo) throws SQLException;
	boolean insert(Dibs dib) throws SQLException;
	boolean delete(Dibs dib) throws SQLException;
}
