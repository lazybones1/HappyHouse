"use strict";(self["webpackChunkvue_pjt"]=self["webpackChunkvue_pjt"]||[]).push([[955],{73955:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",[n("b-col",[n("b-alert",{attrs:{show:""}},[n("h3",[t._v("게시판")])])],1)],1),n("div",[n("b-row",[n("b-col",{attrs:{cols:"1"}}),n("b-col",[n("div",{staticClass:"content-detail-content-info"},[n("div",{staticClass:"content-detail-content-info-left"},[n("div",{staticClass:"content-detail-content-info-left-subject title-info"},[t._v(" "+t._s(t.title)+" ")])]),n("div",{staticClass:"content-detail-content-info-right"},[n("div",{staticClass:"content-detail-content-info-right-user etc-info"},[t._v(" 작성자: "+t._s(t.user)+" ")]),n("div",{staticClass:"content-detail-content-info-right-created etc-info"},[t._v(" 등록일: "+t._s(t.created)+" ")])])])]),n("b-col",{attrs:{cols:"1"}})],1),n("b-row",[n("b-col",{attrs:{cols:"1"}}),n("b-col",[n("div",{staticClass:"content-detail-content"},[t._v(t._s(t.context))])]),n("b-col",{attrs:{cols:"1"}})],1),n("b-row",[n("b-col",{attrs:{cols:"1"}}),n("b-col",[n("div",{staticClass:"content-detail-button"},[t.userInfo?n("b-button",{attrs:{variant:"primary"},on:{click:t.updateData}},[t._v("수정")]):t._e(),t._v("  "),t.userInfo?n("b-button",{attrs:{variant:"success"},on:{click:t.deleteData}},[t._v("삭제")]):t._e()],1)]),n("b-col",{attrs:{cols:"1"}})],1),n("b-row",[n("b-col",{attrs:{cols:"1"}}),n("b-col",[n("div",{staticClass:"content-detail-comment"},[n("CommentList",{attrs:{contentId:t.contentId}})],1)]),n("b-col",{attrs:{cols:"1"}})],1)],1)],1)},s=[],m=n(93019),c=(n(9653),n(34665)),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.userInfo?n("CommentCreate",{attrs:{contentId:t.contentId,reloadComment:t.reloadComment}}):t._e(),t._l(t.comments,(function(t){return n("div",{key:t.comment_id},[n("CommentListItem",{attrs:{commentObj:t}})],1)}))],2)},r=[],i=(n(41539),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",{staticClass:"comment-first-depth"},[n("b-col",{attrs:{cols:"2"}},[n("div",[n("div",[t._v(t._s(t.name))])])]),n("b-col",{attrs:{cols:"7"}},[t._v(" "+t._s(t.commentObj.comment_content)+" ")]),n("b-col",{attrs:{cols:"3"}},[n("div",[n("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"}},[t._v("수정")]),n("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"}},[t._v("삭제")]),n("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"},on:{click:t.subCommentToggle}},[t._v("덧글 달기")])],1)])],1),t.subCommentCreateToggle&&t.userInfo?[n("CommentCreate",{attrs:{contentId:this.commentObj.board_no,isSubComment:!0,commentId:t.commentObj.comment_no,reloadSubComments:t.reloadSubComments,subCommentToggle:t.subCommentToggle}})]:t._e(),t.subCommentList.length>0?t._l(t.subCommentList,(function(e){return n("div",{key:e.subcomment_id,staticClass:"comment-list-item-subcomment-list"},[n("b-row",[n("b-col",{attrs:{cols:"2"}},[n("div",[n("div",[t._v("ㄴ "+t._s(e.comment_writer))])])]),n("b-col",{attrs:{cols:"7"}},[n("div",[t._v(" "+t._s(e.comment_content)+" ")])]),n("b-col",{attrs:{cols:"3"}},[n("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"}},[t._v("수정")]),n("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"}},[t._v("삭제")])],1)],1)],1)})):t._e()],2)}),u=[],d=(n(68309),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-create"},[n("b-input-group",{staticClass:"mt-3",attrs:{prepend:t.name}},[n("b-form-textarea",{attrs:{id:"textarea",placeholder:t.isSubComment?"댓글을 작성해주세요":"코멘트를 달아주세요",rows:"3","max-rows":"6"},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}}),n("b-input-group-append",[n("b-button",{staticClass:"btn-add-Comment",attrs:{variant:"dark"},on:{click:function(e){t.isSubComment?t.createSubComment():t.createComment()}}},[t._v("작성하기")])],1)],1)],1)}),l=[],b="commentStore",C="memberStore",h={name:"CommentCreate",props:{contentId:Number,reloadComment:Function,reloadSubComments:Function,subCommentToggle:Function,isSubComment:Boolean,commentId:Number},data:function(){return{name:"",context:""}},mounted:function(){this.name=this.userInfo.userid},computed:(0,m.Z)({},(0,c.rn)(C,["userInfo"])),methods:(0,m.Z)((0,m.Z)({},(0,c.nv)(b,["getCommentList","addComment"])),{},{createComment:function(){var t={board_no:this.contentId,comment_writer:this.name,comment_content:this.context,comment_depth:0,comment_parent:-1};this.addComment(t),this.reloadComment(),this.context=""},createSubComment:function(){var t={board_no:this.contentId,comment_writer:this.name,comment_content:this.context,comment_depth:1,comment_parent:this.commentId};this.addComment(t),this.reloadSubComments(),this.subCommentToggle(),this.context=""}})},_=h,v=n(1001),f=(0,v.Z)(_,d,l,!1,null,"4c6add91",null),p=f.exports,g="commentStore",I="memberStore",x={name:"CommentListItem",props:{commentObj:Object},components:{CommentCreate:p},computed:(0,m.Z)((0,m.Z)({},(0,c.rn)(g,["Comment"])),(0,c.rn)(I,["userInfo"])),created:function(){var t=this;this.name=this.commentObj.comment_writer,console.log("obj",this.commentObj),this.Comment.some((function(e){0!=e.comment_depth&&e.comment_parent==t.commentObj.comment_no&&(t.subCommentList.push(e),console.log("this.subCommentList",t.subCommentList))}))},data:function(){return{name:"",subCommentList:[],subCommentCreateToggle:!1}},methods:{subCommentToggle:function(){this.subCommentCreateToggle=!this.subCommentCreateToggle},reloadSubComments:function(){this.$router.go()}}},L=x,S=(0,v.Z)(L,i,u,!1,null,"08658dff",null),T=S.exports,w="commentStore",Z="memberStore",k={name:"CommentList",props:{contentId:Number},data:function(){return{comments:[]}},components:{CommentListItem:T,CommentCreate:p},created:function(){var t=this;this.CEARL_COMMENT(),this.comments=[],setTimeout((function(){t.getCommentList(t.contentId)}),100),setTimeout((function(){t.Comment.some((function(e){0==e.comment_depth&&t.comments.push(e)}))}),200)},computed:(0,m.Z)((0,m.Z)({},(0,c.rn)(w,["Comment"])),(0,c.rn)(Z,["userInfo"])),methods:(0,m.Z)((0,m.Z)((0,m.Z)({},(0,c.nv)(w,["getCommentList"])),(0,c.OI)(w,["CEARL_COMMENT"])),{},{reloadComment:function(){var t=this;this.CEARL_COMMENT(),this.comments=[],setTimeout((function(){t.getCommentList(t.contentId)}),100),setTimeout((function(){t.Comment.some((function(e){0==e.comment_depth&&t.comments.push(e)}))}),200)}})},j=k,O=(0,v.Z)(j,a,r,!1,null,null,null),E=O.exports,$="boardStore",N="memberStore",B={name:"BoardDetail",data:function(){return{contentId:Number(this.$route.params.board_no),title:"",context:"",user:"",created:""}},components:{CommentList:E},computed:(0,m.Z)((0,m.Z)({},(0,c.rn)($,["board"])),(0,c.rn)(N,["userInfo"])),created:function(){var t=this;this.getBoard(this.$route.params.board_no),setTimeout((function(){t.init()}),300)},methods:(0,m.Z)((0,m.Z)({},(0,c.nv)($,["getBoard","removeBoard"])),{},{init:function(){console.log("board",this.board),this.contentId=this.board.board_no,this.title=this.board.board_title,this.context=this.board.board_content,this.user=this.board.board_writer,this.created=this.board.board_write_date},deleteData:function(){var t=this;this.removeBoard(this.contentId),setTimeout((function(){t.$router.push({path:"/board"})}),300)},updateData:function(){this.$router.push({path:"/board/create/".concat(this.contentId)})}})},M=B,D=(0,v.Z)(M,o,s,!1,null,"068d16de",null),y=D.exports}}]);
//# sourceMappingURL=955-legacy.6357d103.js.map