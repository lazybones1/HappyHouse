package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.Board_table;

public interface BoardTableService {
	public List<Board_table> selectBoard();

	public Board_table selectOne(int board_no);

	public int insert(Board_table board_table);

	public int update(Board_table board_table);

	public int delete(int board_no);
}
