<template>
  <div class="comment-create">
    <b-input-group :prepend="name" class="mt-3">
      <b-form-textarea
        id="textarea"
        v-model="context"
        :placeholder="
          isSubComment ? '댓글을 작성해주세요' : '코멘트를 달아주세요'
        "
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-input-group-append>
        <b-button
          class="btn-add-Comment"
          variant="dark"
          @click="isSubComment ? createSubComment() : createComment()"
          >작성하기</b-button
        >
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const commentStore = "commentStore";
const memberStore = "memberStore";

export default {
  name: "CommentCreate",
  props: {
    contentId: Number,
    reloadComment: Function,
    reloadSubComments: Function,
    subCommentToggle: Function,
    isSubComment: Boolean,
    commentId: Number,
  },
  data() {
    return {
      name: "",
      context: "",
    };
  },
  mounted() {
    this.name = this.userInfo.userid;
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(commentStore, ["getCommentList", "addComment"]),

    createComment() {
      let Comment = {
        board_no: this.contentId,
        comment_writer: this.name,
        comment_content: this.context,
        comment_depth: 0,
        comment_parent: -1,
      };
      this.addComment(Comment);

      this.reloadComment();
      // this.subCommentToggle();

      this.context = "";
    },
    createSubComment() {
      let Comment = {
        board_no: this.contentId,
        comment_writer: this.name,
        comment_content: this.context,
        comment_depth: 1,
        comment_parent: this.commentId,
      };
      this.addComment(Comment);

      this.reloadSubComments();
      this.subCommentToggle();
      this.context = "";
    },
  },
};
</script>

<style scoped>
.comment-create {
  display: flex;
  margin-bottom: 1em;
}
.btn-add-Comment {
  margin: 10px;
  margin-top: 24px;
}
</style>
