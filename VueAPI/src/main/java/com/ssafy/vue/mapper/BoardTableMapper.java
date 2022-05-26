package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.Board_table;

@Mapper
public interface BoardTableMapper {
	public List<Board_table> selectBoard();
	public Board_table selectOne(int board_no);
	public int insert(Board_table board_table);
	public int update(Board_table board_table);
	public int delete(int board_no);
}
