package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.Notify;

public interface NotifyService {
	public List<Notify> retrieveNotify();
	public Notify detailNotify(int articleno);
	public void updateHit(int articleno);
	public boolean writeNotify(Notify notify);
	public boolean updateNotify(Notify notify);
	public boolean deleteNotify(int articleno);
}
