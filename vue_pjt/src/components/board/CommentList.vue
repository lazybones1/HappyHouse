<template>
  <div>
    <CommentCreate
      :contentId="contentId"
      :reloadComment="reloadComment"
      v-if="userInfo"
    />
    <div :key="item.comment_id" v-for="item in comments">
      <CommentListItem :commentObj="item"></CommentListItem>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

import CommentListItem from "./CommentListItem";
import CommentCreate from "./CommentCreate";

const commentStore = "commentStore";
const memberStore = "memberStore";
export default {
  name: "CommentList",
  props: {
    contentId: Number,
  },
  data() {
    return {
      comments: [],
    };
  },
  components: {
    CommentListItem,
    CommentCreate,
  },
  created() {
    this.CEARL_COMMENT();
    (this.comments = []),
      setTimeout(() => {
        this.getCommentList(this.contentId);
      }, 100);
    setTimeout(() => {
      this.Comment.some((item) => {
        if (item.comment_depth == 0) {
          this.comments.push(item);
        }
      });
    }, 200);
  },
  computed: {
    ...mapState(commentStore, ["Comment"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(commentStore, ["getCommentList"]),
    ...mapMutations(commentStore, ["CEARL_COMMENT"]),

    reloadComment() {
      this.CEARL_COMMENT();
      this.comments = [];
      setTimeout(() => {
        this.getCommentList(this.contentId);
      }, 100);
      setTimeout(() => {
        this.Comment.some((item) => {
          if (item.comment_depth == 0) {
            this.comments.push(item);
          }
        });
      }, 200);
    },
  },
};
</script>

<style></style>
