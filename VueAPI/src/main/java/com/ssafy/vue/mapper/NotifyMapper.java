package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.Notify;
@Mapper
public interface NotifyMapper {
	public List<Notify> selectNotify();
	public Notify selectNotifyByNo(int articleno);
	public void updateHit(int articleno);
	public int insertNotify(Notify notify);
	public int updateNotify(Notify notify);
	public int deleteNotify(int articleno);
}