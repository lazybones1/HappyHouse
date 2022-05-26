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

import com.ssafy.vue.dto.Notify;
import com.ssafy.vue.service.NotifyService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api("NotifyController V1")
@RestController
@RequestMapping("/notify")
//@CrossOrigin(origins = { "*" }, maxAge = 6000)
public class NotifyController {

	private static final Logger logger = LoggerFactory.getLogger(NotifyController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private NotifyService notifyService;

    @ApiOperation(value = "게시판 글목록", notes = "모든 게시글의 정보를 반환한다.", response = List.class)
	@GetMapping
	public ResponseEntity<List<Notify>> retrieveNotify() throws Exception {
		logger.debug("retrieveNotify - 호출");
		return new ResponseEntity<List<Notify>>(notifyService.retrieveNotify(), HttpStatus.OK);
	}

    @ApiOperation(value = "게시판 글보기", notes = "글번호에 해당하는 게시글의 정보를 반환한다.", response = Notify.class)    
	@GetMapping("{articleno}")
	public ResponseEntity<Notify> detailNotify(@PathVariable int articleno) {
		logger.debug("detailNotify - 호출");
		return new ResponseEntity<Notify>(notifyService.detailNotify(articleno), HttpStatus.OK);
	}

    @ApiOperation(value = "게시판 글등록", notes = "새로운 게시글 정보를 입력한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping
	public ResponseEntity<String> writeNotify(@RequestBody Notify notify) {
		logger.debug("writeNotify- 호출");
		if (notifyService.writeNotify(notify)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "게시판 글정보 수정", notes = "글번호에 해당하는 게시글의 정보를 수정한다. 그리고 DB수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("{articleno}")
	public ResponseEntity<String> updateNotify(@RequestBody Notify notify) {
		logger.debug("updateNotify- 호출");
		
		if (notifyService.updateNotify(notify)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "게시판 글삭제", notes = "글번호에 해당하는 게시글의 정보를 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("{articleno}")
	public ResponseEntity<String> deleteNotify(@PathVariable int articleno) {
		logger.debug("deleteNotify- 호출");
		if (notifyService.deleteNotify(articleno)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
}