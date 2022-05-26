<template>
  <b-container>
    <b-row>
      <b-col>
        <b-alert show><h3>게시판</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="10"></b-col>
      <b-col>
        <b-button @click="writeContent" v-if="userInfo">글쓰기</b-button>
      </b-col>
    </b-row>
    <b-table
      striped
      hover
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      @row-clicked="rowClick"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
  </b-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
const boardStore = "boardStore";
const commentStore = "commentStore";
const memberStore = "memberStore";

export default {
  name: "BoardList",
  computed: {
    ...mapState(boardStore, ["Content"]),
    ...mapState(memberStore, ["userInfo"]),
    rows() {
      return this.items.length;
    },
  },
  data() {
    return {
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 보여줄 갯수
      // bootstrap 'b-table' 필드 설정
      fields: [
        {
          key: "board_no",
          label: "번호",
        },
        {
          key: "board_title",
          label: "제목",
        },
        {
          key: "board_writer",
          label: "글쓴이",
        },
        {
          key: "board_write_date",
          label: "작성일",
        },
      ],
      items: "",
    };
  },
  created() {
    this.CLEAR_BOARD_LIST();
    this.CEARL_COMMENT();
    this.getBoardList();

    setTimeout(() => {
      let contentItems = "";
      if (this.Content.length > 0) {
        contentItems = this.Content.sort((a, b) => {
          return b.board_no - a.board_no;
        }); // 내림차순
      } else {
        contentItems = this.Content;
      }
      this.items = contentItems;
    }, 100);
  },
  methods: {
    ...mapActions(boardStore, ["getBoardList"]),
    ...mapMutations(boardStore, ["CLEAR_BOARD_LIST"]),
    ...mapMutations(commentStore, ["CEARL_COMMENT"]),

    rowClick(item, index, e) {
      console.log("ttttt", item);
      console.log(index + e);
      this.$router.push({
        path: `/board/detail/${item.board_no}`,
      });
    },
    writeContent() {
      this.$router.push({
        path: `/board/create`,
      });
    },
  },
};
</script>
