<template>
  <div>
    <b-row class="comment-first-depth">
      <b-col cols="2">
        <div>
          <div>{{ name }}</div>
          <!-- <div>{{ commentObj.created_at }}</div> -->
        </div>
      </b-col>
      <b-col cols="7">
        {{ commentObj.comment_content }}
      </b-col>
      <b-col cols="3">
        <div>
          <b-button variant="dark" class="btn-comment-option">수정</b-button>
          <b-button variant="dark" class="btn-comment-option">삭제</b-button>
          <b-button
            variant="dark"
            @click="subCommentToggle"
            class="btn-comment-option"
            >덧글 달기</b-button
          >
        </div>
      </b-col>
    </b-row>
    <template v-if="subCommentCreateToggle && userInfo">
      <CommentCreate
        :contentId="this.commentObj.board_no"
        :isSubComment="true"
        :commentId="commentObj.comment_no"
        :reloadSubComments="reloadSubComments"
        :subCommentToggle="subCommentToggle"
      />
    </template>
    <template v-if="subCommentList.length > 0">
      <div
        class="comment-list-item-subcomment-list"
        :key="item.subcomment_id"
        v-for="item in subCommentList"
      >
        <b-row>
          <b-col cols="2">
            <div>
              <div>ㄴ {{ item.comment_writer }}</div>
              <!-- <div>{{ item.created_at }}</div> -->
            </div></b-col
          >
          <b-col cols="7"
            ><div>
              {{ item.comment_content }}
            </div></b-col
          >
          <b-col cols="3">
            <b-button variant="dark" class="btn-comment-option">수정</b-button>
            <b-button variant="dark" class="btn-comment-option">삭제</b-button>
          </b-col>
        </b-row>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
const commentStore = "commentStore";
const memberStore = "memberStore";

import CommentCreate from "./CommentCreate";

export default {
  name: "CommentListItem",
  props: {
    commentObj: Object,
  },
  components: {
    CommentCreate,
  },
  computed: {
    ...mapState(commentStore, ["Comment"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    this.name = this.commentObj.comment_writer;
    console.log("obj", this.commentObj);
    this.Comment.some((item) => {
      if (
        item.comment_depth != 0 &&
        item.comment_parent == this.commentObj.comment_no
      ) {
        this.subCommentList.push(item);
        console.log("this.subCommentList", this.subCommentList);
      }
    });
  },
  data() {
    return {
      name: "",
      subCommentList: [],
      subCommentCreateToggle: false,
    };
  },
  methods: {
    subCommentToggle() {
      this.subCommentCreateToggle = !this.subCommentCreateToggle;
    },
    reloadSubComments() {
      this.$router.go();
    },
  },
};
</script>

<style scoped>
.comment-list-item {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}

.comment-list-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.comment-list-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment-list-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.btn {
  margin-bottom: 10px;
}

.comment-list-item-subcomment-list {
  padding-top: 10px;
  padding-bottom: 1em;
  margin-left: 3em;
  border-top: 1px dotted black;
}
.btn-float {
  float: right;
}
.btn-comment-first {
  margin: 20px 0 0 0;
  padding: 5px;
  font-size: 10px;
}
.btn-comment-option {
  float: left;
  font-size: 15px;
  min-width: 40px;
  padding: 6px;
  margin-left: 5px;
}
.comment-first-depth {
  padding-top: 10px;
  border-top: 1px dotted black;
  margin: 3px;
}
</style>
