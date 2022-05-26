package com.ssafy.vue.service;

import com.ssafy.vue.dto.MemberDto;

public interface MemberService {

	public MemberDto login(MemberDto memberDto) throws Exception;
	public MemberDto userInfo(String userid) throws Exception;
	public int signUp(MemberDto memberDto) throws Exception;
	public int update(MemberDto memberDto) throws Exception;
	
}
