package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.dto.Board_table;
import com.ssafy.vue.mapper.BoardTableMapper;

@Service
public class BoardTableServiceImpl implements BoardTableService {
	
    @Autowired
	private BoardTableMapper boardTableMapper;

	@Override
	public List<Board_table> selectBoard() {		
		return boardTableMapper.selectBoard();
	}

	@Override
	public Board_table selectOne(int board_no) {		
		return boardTableMapper.selectOne(board_no);
	}

	@Override
	public int insert(Board_table board_table) {
		// TODO Auto-generated method stub
		return boardTableMapper.insert(board_table);
	}

	@Override
	public int update(Board_table board_table) {
		// TODO Auto-generated method stub
		return boardTableMapper.update(board_table);
	}

	@Override
	public int delete(int board_no) {
		// TODO Auto-generated method stub
		return boardTableMapper.delete(board_no);
	}


}