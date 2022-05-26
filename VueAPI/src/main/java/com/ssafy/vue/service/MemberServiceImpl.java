package com.ssafy.vue.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.dto.MemberDto;
import com.ssafy.vue.mapper.MemberMapper;

import util.Hash;

@Service
public class MemberServiceImpl implements MemberService {
	private static final int OUTPUT_BUF_SIZE = 512;
	private static final int MSG_0_BUF_SIZE = 200;
	@Autowired
	private MemberMapper memberMapper;
	
	@Override
	public MemberDto login(MemberDto memberDto) throws Exception {
		if(memberDto.getUserid() == null || memberDto.getUserpwd() == null)
			return null;
		Hash hash = new Hash(memberDto.getUserpwd());
		hash.setEncryptData(hash.getPw());
		memberDto.setUserpwd(hash.getEncryptData());		
		return memberMapper.login(memberDto);
	}

	@Override
	public MemberDto userInfo(String userid) throws Exception {		
		return memberMapper.userInfo(userid);
	}

	@Override
	public int signUp(MemberDto memberDto) throws Exception {
		Hash hash = new Hash(memberDto.getUserpwd());
		hash.setEncryptData(hash.getPw());
		String enc = hash.getEncryptData();
		memberDto.setUserpwd(enc);
		return memberMapper.signup(memberDto);
	}

	@Override
	public int update(MemberDto memberDto) throws Exception {
		if(memberDto.getUserpwd() == null || memberDto.getUserpwd().trim().equals("")) {
			memberDto.setUserpwd(memberMapper.getpwd(memberDto.getUserid()));
		}
		Hash hash = new Hash(memberDto.getUserpwd());
		hash.setEncryptData(hash.getPw());
		String enc = hash.getEncryptData();
		memberDto.setUserpwd(enc);		
		return memberMapper.update(memberDto);
	}
	
	

}
