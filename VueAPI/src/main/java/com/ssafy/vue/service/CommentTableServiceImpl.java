package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.ssafy.vue.dto.Comment_table;
import com.ssafy.vue.mapper.BoardTableMapper;
import com.ssafy.vue.mapper.CommentTableMapper;

@Service
public class CommentTableServiceImpl implements CommentTableService {
	
    @Autowired
	private CommentTableMapper commentTableMapper;

	@Override
	public List<Comment_table> selectComment(int board_num) {
		// TODO Auto-generated method stub
		return commentTableMapper.selectComment(board_num);
	}

	@Override
	public int insert(Comment_table comment_table) {
		// TODO Auto-generated method stub
		return commentTableMapper.insert(comment_table);
	}

	@Override
	public int update(Comment_table comment_table) {
		// TODO Auto-generated method stub
		return commentTableMapper.update(comment_table);
	}

	@Override
	public int delete(int comment_no) {
		// TODO Auto-generated method stub
		return commentTableMapper.delete(comment_no);
	}


}