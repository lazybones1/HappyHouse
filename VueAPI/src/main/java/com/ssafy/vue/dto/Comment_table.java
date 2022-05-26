package com.ssafy.vue.dto;

public class Comment_table {
	private int comment_no;
	private int board_no;
	private String comment_writer;
	private String comment_content;
	private int comment_depth;
	private int comment_parent;
	
	public Comment_table() {
		super();
	}
	public Comment_table(int board_no, String comment_writer, String comment_content,
			int comment_depth, int comment_parent) {
		super();
		this.board_no = board_no;
		this.comment_writer = comment_writer;
		this.comment_content = comment_content;
		this.comment_depth = comment_depth;
		this.comment_parent = comment_parent;
	}

	public Comment_table(int comment_no, int board_no, String comment_writer, String comment_content,
			int comment_depth, int comment_parent) {
		super();
		this.comment_no = comment_no;
		this.board_no = board_no;
		this.comment_writer = comment_writer;
		this.comment_content = comment_content;
		this.comment_depth = comment_depth;
		this.comment_parent = comment_parent;
	}
	public int getComment_no() {
		return comment_no;
	}
	public void setComment_no(int comment_no) {
		this.comment_no = comment_no;
	}
	public int getBoard_no() {
		return board_no;
	}
	public void setBoard_no(int board_no) {
		this.board_no = board_no;
	}
	public String getComment_writer() {
		return comment_writer;
	}
	public void setComment_writer(String comment_writer) {
		this.comment_writer = comment_writer;
	}
	public String getComment_content() {
		return comment_content;
	}
	public void setComment_content(String comment_content) {
		this.comment_content = comment_content;
	}
	public int getComment_depth() {
		return comment_depth;
	}
	public void setComment_depth(int comment_depth) {
		this.comment_depth = comment_depth;
	}
	
	public int getComment_parent() {
		return comment_parent;
	}
	public void setComment_parent(int comment_parent) {
		this.comment_parent = comment_parent;
	}
	@Override
	public String toString() {
		return "Comment_table [comment_no=" + comment_no + ", board_no=" + board_no + ", comment_writer="
				+ comment_writer + ", comment_content=" + comment_content + ", comment_depth=" + comment_depth
				+ ", comment_parent=" + comment_parent + "]";
	}
	
	
	
}
