package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.Comment_table;

@Mapper
public interface CommentTableMapper {
	public List<Comment_table> selectComment(int board_num);
	public int insert(Comment_table comment_table);
	public int update(Comment_table comment_table);
	public int delete(int comment_no);
}
