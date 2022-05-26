package com.ssafy.vue.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.ssafy.vue.dto.Dibs;

@Mapper
public interface DibMapper {
	List<Dibs> selectList(String userid) throws SQLException;	
	Dibs selectOne(int dibsNo) throws SQLException;
	int insert(Dibs dib) throws SQLException;
	int delete(Dibs dib) throws SQLException;
}
