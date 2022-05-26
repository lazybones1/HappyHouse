package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.dto.Notify;
import com.ssafy.vue.mapper.NotifyMapper;


@Service
public class NotifyServiceImpl implements NotifyService {
	
    @Autowired
	private NotifyMapper notifyMapper;

    @Override
	public List<Notify> retrieveNotify() {
		return notifyMapper.selectNotify();
	}
    
  	@Override
	public boolean writeNotify(Notify notify) {
		return notifyMapper.insertNotify(notify) == 1;
	}

	@Override
	public Notify detailNotify(int articleno) {
		return notifyMapper.selectNotifyByNo(articleno);
	}
	
	@Override
	public void updateHit(int articleno) {
		notifyMapper.updateHit(articleno);
	}

	@Override
	@Transactional
	public boolean updateNotify(Notify notify) {
		return notifyMapper.updateNotify(notify) == 1;
	}

	@Override
	@Transactional
	public boolean deleteNotify(int articleno) {
		return notifyMapper.deleteNotify(articleno) == 1;
	}
}