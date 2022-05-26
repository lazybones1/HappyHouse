package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.Comment_table;

public interface CommentTableService {
	public List<Comment_table> selectComment(int board_num);
	public int insert(Comment_table comment_table);
	public int update(Comment_table comment_table);
	public int delete(int comment_no);
}
