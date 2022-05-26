<template>
  <b-container>
    <b-row>
      <b-col>
        <b-alert show><h3>게시판</h3></b-alert>
      </b-col>
    </b-row>
    <div>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <div class="content-detail-content-info">
            <div class="content-detail-content-info-left">
              <div class="content-detail-content-info-left-subject title-info">
                {{ title }}
              </div>
            </div>
            <div class="content-detail-content-info-right">
              <div class="content-detail-content-info-right-user etc-info">
                작성자: {{ user }}
              </div>
              <div class="content-detail-content-info-right-created etc-info">
                등록일: {{ created }}
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col
          ><div class="content-detail-content">{{ context }}</div></b-col
        >
        <b-col cols="1"></b-col>
      </b-row>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col
          ><div class="content-detail-button">
            <b-button variant="primary" @click="updateData" v-if="userInfo"
              >수정</b-button
            >&nbsp;
            <b-button variant="success" @click="deleteData" v-if="userInfo"
              >삭제</b-button
            >
          </div></b-col
        >
        <b-col cols="1"></b-col>
      </b-row>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <div class="content-detail-comment">
            <CommentList :contentId="contentId"></CommentList></div
        ></b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CommentList from "./CommentList";

const boardStore = "boardStore";
const memberStore = "memberStore";
export default {
  name: "BoardDetail",
  data() {
    return {
      contentId: Number(this.$route.params.board_no),
      title: "",
      context: "",
      user: "",
      created: "",
    };
  },
  components: {
    CommentList,
  },
  computed: {
    ...mapState(boardStore, ["board"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    this.getBoard(this.$route.params.board_no);
    setTimeout(() => {
      this.init();
    }, 300);
  },
  methods: {
    ...mapActions(boardStore, ["getBoard", "removeBoard"]),
    init() {
      console.log("board", this.board);
      this.contentId = this.board.board_no;
      this.title = this.board.board_title;
      this.context = this.board.board_content;
      this.user = this.board.board_writer;
      this.created = this.board.board_write_date;
    },
    deleteData() {
      this.removeBoard(this.contentId);
      setTimeout(() => {
        this.$router.push({
          path: "/board",
        });
      }, 300);
    },
    updateData() {
      this.$router.push({
        path: `/board/create/${this.contentId}`,
      });
    },
  },
};
</script>
<style scoped>
.content-detail-content-info {
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px dotted black;
  justify-content: space-between;
}

.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
}

.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.content-detail-content {
  border-bottom: 1px dotted black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 300px;
}

.content-detail-button {
  margin-top: 1rem;
  padding: 5px;
}

.content-detail-comment {
  border-top: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}

.content-detail-content-info-left-number {
  font-size: 10px;
}
.etc-info {
  font-size: 13px;
}
.title-info {
  font-size: 25px;
  font-weight: bold;
}
</style>
