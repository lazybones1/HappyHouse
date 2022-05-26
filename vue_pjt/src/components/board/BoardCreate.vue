<template>
  <b-container>
    <b-row>
      <b-col>
        <b-alert show><h3>게시판</h3></b-alert>
      </b-col>
    </b-row>
    <div class="input-form">
      <b-row>
        <b-col>제목 : </b-col>
        <b-col cols="9"></b-col>
      </b-row>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col
          ><b-input
            v-if="!updateMode"
            v-model="subject"
            placeholder="제목을 입력해주세요."
            id="subject"
          ></b-input>
          <b-input
            v-if="updateMode"
            v-model="subject"
            placeholder="제목을 입력해주세요."
            id="subject"
            disabled
          ></b-input>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>내용 : </b-col>
        <b-col cols="9"></b-col>
      </b-row>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <b-form-textarea
            v-model="context"
            placeholder="내용을 입력해 주세요"
            rows="3"
            max-rows="6"
            class="input-form"
          ></b-form-textarea>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </div>

    <br />
    <b-button @click="updateMode ? updateContent() : uploadContent()"
      >저장</b-button
    >&nbsp;
    <b-button @click="cancle">취소</b-button>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";
const boardStore = "boardStore";

export default {
  name: "BoardCreate",

  data() {
    return {
      subject: "",
      context: "",
      updateMode: this.$route.params.board_no > 0 ? true : false,
    };
  },
  created() {
    if (this.$route.params.board_no > 0) {
      this.subject = this.board.board_title;
      this.context = this.board.board_content;
    }
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(boardStore, ["Content", "board"]),
  },
  methods: {
    ...mapActions(boardStore, ["addBoard", "updateBoard"]),

    uploadContent() {
      let Board_table = {
        board_title: this.subject,
        board_writer: this.userInfo.userid,
        board_content: this.context,
      };
      this.addBoard(Board_table);

      this.$router.push({
        path: "/board",
      });
    },
    updateContent() {
      let Board_table = {
        board_no: this.$route.params.board_no,
        board_title: this.subject,
        board_content: this.context,
      };
      this.updateBoard(Board_table);
      setTimeout(() => {
        this.$router.push({
          path: "/board",
        });
      }, 100);
    },
    cancle() {
      this.$router.push({
        path: "/board",
      });
    },
  },
};
</script>

<style scoped></style>
