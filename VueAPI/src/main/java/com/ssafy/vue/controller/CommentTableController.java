package com.ssafy.vue.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.ssafy.vue.dto.Comment_table;
import com.ssafy.vue.service.CommentTableService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api("BoardController V1")
@RestController
@RequestMapping("/comment_table")
//@CrossOrigin(origins = { "*" }, maxAge = 6000)
public class CommentTableController {

	private static final Logger logger = LoggerFactory.getLogger(CommentTableController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private CommentTableService commentTableService;


    @ApiOperation(value = "게시판 글보기", notes = "글번호에 해당하는 게시글의 정보를 반환한다.", response = Comment_table.class)    
	@GetMapping("{board_no}")
	public ResponseEntity<List<Comment_table>> selectComment(@PathVariable int board_no) {
		logger.debug("detailBoard - 호출");
		return new ResponseEntity<List<Comment_table>>(commentTableService.selectComment(board_no), HttpStatus.OK);
	}

    @ApiOperation(value = "게시판 글등록", notes = "새로운 게시글 정보를 입력한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping
	public ResponseEntity<String> writeComment(@RequestBody Comment_table comment_table) {
		logger.debug("writeBoard - 호출");
		System.out.println(comment_table);
		if (commentTableService.insert(comment_table) != 0) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "게시판 글정보 수정", notes = "글번호에 해당하는 게시글의 정보를 수정한다. 그리고 DB수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("{board_no}")
	public ResponseEntity<String> updateBoard(@RequestBody Comment_table comment_table) {
		logger.debug("updateBoard - 호출");
		
		if (commentTableService.update(comment_table) != 0) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "게시판 글삭제", notes = "글번호에 해당하는 게시글의 정보를 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("{comment_no}")
	public ResponseEntity<String> deleteBoard(@PathVariable int comment_no) {
		logger.debug("deleteBoard - 호출");
		if (commentTableService.delete(comment_no) != 0) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
}