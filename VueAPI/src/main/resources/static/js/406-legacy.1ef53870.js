"use strict";(self["webpackChunkvue_pjt"]=self["webpackChunkvue_pjt"]||[]).push([[406],{29406:function(t,o,e){e.r(o),e.d(o,{default:function(){return p}});var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",[e("b-row",[e("b-col",[e("b-alert",{attrs:{show:""}},[e("h3",[t._v("게시판")])])],1)],1),e("div",{staticClass:"input-form"},[e("b-row",[e("b-col",[t._v("제목 : ")]),e("b-col",{attrs:{cols:"9"}})],1),e("b-row",[e("b-col",{attrs:{cols:"1"}}),e("b-col",[t.updateMode?t._e():e("b-input",{attrs:{placeholder:"제목을 입력해주세요.",id:"subject"},model:{value:t.subject,callback:function(o){t.subject=o},expression:"subject"}}),t.updateMode?e("b-input",{attrs:{placeholder:"제목을 입력해주세요.",id:"subject",disabled:""},model:{value:t.subject,callback:function(o){t.subject=o},expression:"subject"}}):t._e()],1),e("b-col",{attrs:{cols:"1"}})],1),e("br"),e("b-row",[e("b-col",[t._v("내용 : ")]),e("b-col",{attrs:{cols:"9"}})],1),e("b-row",[e("b-col",{attrs:{cols:"1"}}),e("b-col",[e("b-form-textarea",{staticClass:"input-form",attrs:{placeholder:"내용을 입력해 주세요",rows:"3","max-rows":"6"},model:{value:t.context,callback:function(o){t.context=o},expression:"context"}})],1),e("b-col",{attrs:{cols:"1"}})],1)],1),e("br"),e("b-button",{on:{click:function(o){t.updateMode?t.updateContent():t.uploadContent()}}},[t._v("저장")]),t._v("  "),e("b-button",{on:{click:t.cancle}},[t._v("취소")])],1)},r=[],n=e(93019),s=e(34665),c="memberStore",u="boardStore",b={name:"BoardCreate",data:function(){return{subject:"",context:"",updateMode:this.$route.params.board_no>0}},created:function(){this.$route.params.board_no>0&&(this.subject=this.board.board_title,this.context=this.board.board_content)},computed:(0,n.Z)((0,n.Z)({},(0,s.rn)(c,["userInfo"])),(0,s.rn)(u,["Content","board"])),methods:(0,n.Z)((0,n.Z)({},(0,s.nv)(u,["addBoard","updateBoard"])),{},{uploadContent:function(){var t={board_title:this.subject,board_writer:this.userInfo.userid,board_content:this.context};this.addBoard(t),this.$router.push({path:"/board"})},updateContent:function(){var t=this,o={board_no:this.$route.params.board_no,board_title:this.subject,board_content:this.context};this.updateBoard(o),setTimeout((function(){t.$router.push({path:"/board"})}),100)},cancle:function(){this.$router.push({path:"/board"})}})},d=b,l=e(1001),i=(0,l.Z)(d,a,r,!1,null,"db307b1a",null),p=i.exports}}]);
//# sourceMappingURL=406-legacy.1ef53870.js.map