<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>공지사항</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col cols="1"></b-col>
      <b-col class="text-left" cols="1">
        <b-button variant="outline-primary" @click="listArticle">목록</b-button>
      </b-col>
      <b-col cols="7"></b-col>
      <b-col class="text-right" cols="2">
        <b-button
          v-if="isAdmin"
          variant="outline-info"
          size="sm"
          @click="moveModifyArticle"
          class="mr-2"
          >글수정</b-button
        >
        <span class="space"> </span>
        <b-button
          variant="outline-danger"
          size="sm"
          @click="deleteArticle"
          v-if="isAdmin"
          >글삭제</b-button
        >
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col cols="1"></b-col>
      <b-col>
        <b-card
          :header-html="`
          <b-row class='area-center'>            
            <b-col cols='8' class='articleSub'>${article.subject}</b-col>   
            <b-col cols='2' class='article-etc-info'>
              <div class='articlehit'>조회수: ${article.hit}</div>
              <div class='articlehit'>작성자 : ${article.userid}</div>
              <div class='articlehit'>${article.regtime}</div>
            </b-col> 
          </b-row>
          `"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left notify-body">
            <div v-html="message"></div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="1"></b-col>
    </b-row>
  </b-container>
</template>

<script>
// import moment from "moment";
import { getArticle, deleteArticle } from "@/api/notify";
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
  name: "NotifyDetail",
  data() {
    return {
      article: {},
    };
  },
  computed: {
    ...mapState(memberStore, ["isAdmin"]),
    message() {
      if (this.article.content)
        return this.article.content.split("\n").join("<br>");
      return "";
    },
  },
  created() {
    getArticle(
      this.$route.params.articleno,
      (response) => {
        this.article = response.data;
      },
      (error) => {
        console.log("삭제시 에러발생!!", error);
      }
    );
  },
  methods: {
    listArticle() {
      this.$router.push({ name: "notifyList" });
    },
    moveModifyArticle() {
      this.$router.replace({
        name: "notifyModify",
        params: { articleno: this.article.articleno },
      });
    },
    deleteArticle() {
      if (confirm("정말로 삭제?")) {
        deleteArticle(this.article.articleno, () => {
          this.$router.push({ name: "notifyList" });
        });
      }
    },
  },
  // filters: {
  //   dateFormat(regtime) {
  //     return moment(new Date(regtime)).format("YY.MM.DD hh:mm:ss");
  //   },
  // },
};
</script>

<style>
.area-center {
  text-align: center;
}
.arrticleNo {
  font-size: 15px;
  float: left;
}
.articleSub {
  font-size: 25px;
  font-weight: bold;
  float: left;
  padding: 10px;
}
.articlehit {
  font-size: 10px;
}
.article-etc-info {
  float: right;
}
.space {
  padding: 5px;
}
.notify-body {
  min-height: 250px;
}
</style>
