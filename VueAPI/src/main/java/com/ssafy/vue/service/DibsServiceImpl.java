package com.ssafy.vue.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.dto.Dibs;
import com.ssafy.vue.mapper.DibMapper;
@Service
public class DibsServiceImpl implements DibsService {

	@Autowired
	private DibMapper dibsMapper;
	
	@Override
	public List<Dibs> selectList(String userid) throws SQLException {		
		return dibsMapper.selectList(userid);
	}

	@Override
	public Dibs selectOne(int dibsNo) throws SQLException {
		// TODO Auto-generated method stub
		return dibsMapper.selectOne(dibsNo);
	}

	@Override
	public boolean insert(Dibs dib) throws SQLException {
		// TODO Auto-generated method stub
		return dibsMapper.insert(dib) == 1;
	}

	@Override
	public boolean delete(Dibs dib) throws SQLException {
		// TODO Auto-generated method stub
		return dibsMapper.delete(dib) == 1;
	}

}
