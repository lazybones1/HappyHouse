package com.ssafy.vue.dto;

public class Board_table {
	private int board_no;
	private String board_title;
	private String board_writer;
	private String user_id;
	private String board_content;
	private String board_write_date;
	private int board_read_count;
	public Board_table() {
		super();
	}
	public Board_table( String board_title, String board_writer, String user_id, String board_content,
			String board_write_date, int board_read_count) {
		super();		
		this.board_title = board_title;
		this.board_writer = board_writer;
		this.user_id = user_id;
		this.board_content = board_content;
		this.board_write_date = board_write_date;
		this.board_read_count = board_read_count;
	}
	
	public Board_table(int board_no, String board_title, String board_writer, String user_id, String board_content,
			String board_write_date, int board_read_count) {
		super();
		this.board_no = board_no;
		this.board_title = board_title;
		this.board_writer = board_writer;
		this.user_id = user_id;
		this.board_content = board_content;
		this.board_write_date = board_write_date;
		this.board_read_count = board_read_count;
	}
	public int getBoard_no() {
		return board_no;
	}
	public void setBoard_no(int board_no) {
		this.board_no = board_no;
	}
	public String getBoard_title() {
		return board_title;
	}
	public void setBoard_title(String board_title) {
		this.board_title = board_title;
	}
	public String getBoard_writer() {
		return board_writer;
	}
	public void setBoard_writer(String board_writer) {
		this.board_writer = board_writer;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getBoard_content() {
		return board_content;
	}
	public void setBoard_content(String board_content) {
		this.board_content = board_content;
	}
	public String getBoard_write_date() {
		return board_write_date;
	}
	public void setBoard_write_date(String board_write_date) {
		this.board_write_date = board_write_date;
	}
	public int getBoard_read_count() {
		return board_read_count;
	}
	public void setBoard_read_count(int board_read_count) {
		this.board_read_count = board_read_count;
	}
	@Override
	public String toString() {
		return "Board_table [board_no=" + board_no + ", board_title=" + board_title + ", board_writer=" + board_writer
				+ ", user_id=" + user_id + ", board_content=" + board_content + ", board_write_date=" + board_write_date
				+ ", board_read_count=" + board_read_count + "]";
	}
	
	
	
}
