<template>
  <b-container class="bv-example-row mt-3">
    <img src="@/assets/imgs/newsLog.png" alt="" />

    <template>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col
          ><b-table :items="newsList" :fields="fields">
            <template #cell(title)="data">
              <div v-html="data.value" class="new-title"></div>
            </template>
            <template #cell(description)="data">
              <div v-html="data.value" class="new-description"></div>
            </template>
            <template #cell(pubDate)="data">
              <div v-html="dateFilter(data.value)" class="new-pubDate"></div>
            </template>
            <template #cell(link)="data">
              <div class="new-link">
                <a :href="`${data.value}`">[링크]</a>
              </div>
            </template>
          </b-table></b-col
        >

        <b-col cols="1"></b-col>
      </b-row>
    </template>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";
const newsStore = "newsStore";
export default {
  name: "newsList",
  data() {
    return {
      fields: [
        {
          key: "title",
          label: "제목",
        },
        {
          key: "description",
          label: "내용",
        },
        {
          key: "pubDate",
          label: "작성일",
        },
        {
          key: "link",
          label: "링크 ",
        },
      ],
    };
  },
  mounted() {
    this.getNewsList();
    this.dateFilter("1");
  },
  computed: {
    ...mapState(newsStore, ["newsList"]),
  },
  methods: {
    ...mapActions(newsStore, ["getNewsList"]),
    dateFilter(date) {
      return moment(date, "DD.mm.YYYY").format("YYYY.MM.DD");
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 20px;
}
.new-title,
.new-description,
new-pubDate {
  font-size: 15px;
  padding: 5px;
}
.new-title {
  font-weight: bold;
}
.new-link {
  padding: 5px;
  min-width: 70px;
}
</style>
