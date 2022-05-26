"use strict";(self["webpackChunkvue_pjt"]=self["webpackChunkvue_pjt"]||[]).push([[955],{3955:function(t,e,o){o.r(e),o.d(e,{default:function(){return Z}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("b-row",[o("b-col",[o("b-alert",{attrs:{show:""}},[o("h3",[t._v("게시판")])])],1)],1),o("div",[o("b-row",[o("b-col",{attrs:{cols:"1"}}),o("b-col",[o("div",{staticClass:"content-detail-content-info"},[o("div",{staticClass:"content-detail-content-info-left"},[o("div",{staticClass:"content-detail-content-info-left-subject title-info"},[t._v(" "+t._s(t.title)+" ")])]),o("div",{staticClass:"content-detail-content-info-right"},[o("div",{staticClass:"content-detail-content-info-right-user etc-info"},[t._v(" 작성자: "+t._s(t.user)+" ")]),o("div",{staticClass:"content-detail-content-info-right-created etc-info"},[t._v(" 등록일: "+t._s(t.created)+" ")])])])]),o("b-col",{attrs:{cols:"1"}})],1),o("b-row",[o("b-col",{attrs:{cols:"1"}}),o("b-col",[o("div",{staticClass:"content-detail-content"},[t._v(t._s(t.context))])]),o("b-col",{attrs:{cols:"1"}})],1),o("b-row",[o("b-col",{attrs:{cols:"1"}}),o("b-col",[o("div",{staticClass:"content-detail-button"},[t.userInfo?o("b-button",{attrs:{variant:"primary"},on:{click:t.updateData}},[t._v("수정")]):t._e(),t._v("  "),t.userInfo?o("b-button",{attrs:{variant:"success"},on:{click:t.deleteData}},[t._v("삭제")]):t._e()],1)]),o("b-col",{attrs:{cols:"1"}})],1),o("b-row",[o("b-col",{attrs:{cols:"1"}}),o("b-col",[o("div",{staticClass:"content-detail-comment"},[o("CommentList",{attrs:{contentId:t.contentId}})],1)]),o("b-col",{attrs:{cols:"1"}})],1)],1)],1)},s=[],m=o(4665),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.userInfo?o("CommentCreate",{attrs:{contentId:t.contentId,reloadComment:t.reloadComment}}):t._e(),t._l(t.comments,(function(t){return o("div",{key:t.comment_id},[o("CommentListItem",{attrs:{commentObj:t}})],1)}))],2)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-row",{staticClass:"comment-first-depth"},[o("b-col",{attrs:{cols:"2"}},[o("div",[o("div",[t._v(t._s(t.name))])])]),o("b-col",{attrs:{cols:"7"}},[t._v(" "+t._s(t.commentObj.comment_content)+" ")]),o("b-col",{attrs:{cols:"3"}},[o("div",[o("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"}},[t._v("수정")]),o("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"}},[t._v("삭제")]),o("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"},on:{click:t.subCommentToggle}},[t._v("덧글 달기")])],1)])],1),t.subCommentCreateToggle&&t.userInfo?[o("CommentCreate",{attrs:{contentId:this.commentObj.board_no,isSubComment:!0,commentId:t.commentObj.comment_no,reloadSubComments:t.reloadSubComments,subCommentToggle:t.subCommentToggle}})]:t._e(),t.subCommentList.length>0?t._l(t.subCommentList,(function(e){return o("div",{key:e.subcomment_id,staticClass:"comment-list-item-subcomment-list"},[o("b-row",[o("b-col",{attrs:{cols:"2"}},[o("div",[o("div",[t._v("ㄴ "+t._s(e.comment_writer))])])]),o("b-col",{attrs:{cols:"7"}},[o("div",[t._v(" "+t._s(e.comment_content)+" ")])]),o("b-col",{attrs:{cols:"3"}},[o("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"}},[t._v("수정")]),o("b-button",{staticClass:"btn-comment-option",attrs:{variant:"dark"}},[t._v("삭제")])],1)],1)],1)})):t._e()],2)},i=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment-create"},[o("b-input-group",{staticClass:"mt-3",attrs:{prepend:t.name}},[o("b-form-textarea",{attrs:{id:"textarea",placeholder:t.isSubComment?"댓글을 작성해주세요":"코멘트를 달아주세요",rows:"3","max-rows":"6"},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}}),o("b-input-group-append",[o("b-button",{staticClass:"btn-add-Comment",attrs:{variant:"dark"},on:{click:function(e){t.isSubComment?t.createSubComment():t.createComment()}}},[t._v("작성하기")])],1)],1)],1)},d=[];const b="commentStore",u="memberStore";var C={name:"CommentCreate",props:{contentId:Number,reloadComment:Function,reloadSubComments:Function,subCommentToggle:Function,isSubComment:Boolean,commentId:Number},data(){return{name:"",context:""}},mounted(){this.name=this.userInfo.userid},computed:{...(0,m.rn)(u,["userInfo"])},methods:{...(0,m.nv)(b,["getCommentList","addComment"]),createComment(){let t={board_no:this.contentId,comment_writer:this.name,comment_content:this.context,comment_depth:0,comment_parent:-1};this.addComment(t),this.reloadComment(),this.context=""},createSubComment(){let t={board_no:this.contentId,comment_writer:this.name,comment_content:this.context,comment_depth:1,comment_parent:this.commentId};this.addComment(t),this.reloadSubComments(),this.subCommentToggle(),this.context=""}}},h=C,_=o(1001),v=(0,_.Z)(h,l,d,!1,null,"4c6add91",null),p=v.exports;const f="commentStore",g="memberStore";var I={name:"CommentListItem",props:{commentObj:Object},components:{CommentCreate:p},computed:{...(0,m.rn)(f,["Comment"]),...(0,m.rn)(g,["userInfo"])},created(){this.name=this.commentObj.comment_writer,console.log("obj",this.commentObj),this.Comment.some((t=>{0!=t.comment_depth&&t.comment_parent==this.commentObj.comment_no&&(this.subCommentList.push(t),console.log("this.subCommentList",this.subCommentList))}))},data(){return{name:"",subCommentList:[],subCommentCreateToggle:!1}},methods:{subCommentToggle(){this.subCommentCreateToggle=!this.subCommentCreateToggle},reloadSubComments(){this.$router.go()}}},x=I,L=(0,_.Z)(x,c,i,!1,null,"08658dff",null),S=L.exports;const T="commentStore",w="memberStore";var k={name:"CommentList",props:{contentId:Number},data(){return{comments:[]}},components:{CommentListItem:S,CommentCreate:p},created(){this.CEARL_COMMENT(),this.comments=[],setTimeout((()=>{this.getCommentList(this.contentId)}),100),setTimeout((()=>{this.Comment.some((t=>{0==t.comment_depth&&this.comments.push(t)}))}),200)},computed:{...(0,m.rn)(T,["Comment"]),...(0,m.rn)(w,["userInfo"])},methods:{...(0,m.nv)(T,["getCommentList"]),...(0,m.OI)(T,["CEARL_COMMENT"]),reloadComment(){this.CEARL_COMMENT(),this.comments=[],setTimeout((()=>{this.getCommentList(this.contentId)}),100),setTimeout((()=>{this.Comment.some((t=>{0==t.comment_depth&&this.comments.push(t)}))}),200)}}},j=k,O=(0,_.Z)(j,r,a,!1,null,null,null),E=O.exports;const $="boardStore",N="memberStore";var B={name:"BoardDetail",data(){return{contentId:Number(this.$route.params.board_no),title:"",context:"",user:"",created:""}},components:{CommentList:E},computed:{...(0,m.rn)($,["board"]),...(0,m.rn)(N,["userInfo"])},created(){this.getBoard(this.$route.params.board_no),setTimeout((()=>{this.init()}),300)},methods:{...(0,m.nv)($,["getBoard","removeBoard"]),init(){console.log("board",this.board),this.contentId=this.board.board_no,this.title=this.board.board_title,this.context=this.board.board_content,this.user=this.board.board_writer,this.created=this.board.board_write_date},deleteData(){this.removeBoard(this.contentId),setTimeout((()=>{this.$router.push({path:"/board"})}),300)},updateData(){this.$router.push({path:`/board/create/${this.contentId}`})}}},M=B,D=(0,_.Z)(M,n,s,!1,null,"068d16de",null),Z=D.exports}}]);
//# sourceMappingURL=955.bac46840.js.map