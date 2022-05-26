package com.ssafy.vue.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssafy.vue.dto.Dibs;
import com.ssafy.vue.dto.MemberDto;
import com.ssafy.vue.service.DibsService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;


@Controller
@RequestMapping("/dib")
@CrossOrigin("*")
public class DibsController {

	@Autowired
	private DibsService dibsService;
	
	@PostMapping("/list")
	public ResponseEntity<List<Dibs>> dibsList(
		@RequestBody 
		String userid, HttpServletRequest request) throws Exception {	
		return new ResponseEntity<List<Dibs>>(dibsService.selectList(userid.substring(1, userid.length()-1)), HttpStatus.OK);		
	}
	
	@PostMapping("/one")
	public ResponseEntity<?> dib(
		@RequestBody 
		int dibsNo, HttpServletRequest request) throws Exception {
		return new ResponseEntity<Dibs>(dibsService.selectOne(dibsNo), HttpStatus.OK);		
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> adddib(
		@RequestBody 
		Dibs dib, HttpServletRequest request) throws Exception {		
		if(dibsService.insert(dib))
			return new ResponseEntity<Void>(HttpStatus.OK);	
		else {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);	
		}	
	}
	
	@PostMapping("/remove")
	public ResponseEntity<?> remove(
		@RequestBody 
		Dibs dib, HttpServletRequest request) throws Exception {
		System.out.println(dib);
		if(dibsService.delete(dib))
			return new ResponseEntity<Void>(HttpStatus.OK);	
		else {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);	
		}	
	}
}
