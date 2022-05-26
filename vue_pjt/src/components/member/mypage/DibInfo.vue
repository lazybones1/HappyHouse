<template>
  <b-container class="bv-example-row mt-3">
    <b-alert variant="secondary" show><h3>찜 목록</h3></b-alert>
    <dib-info-item v-for="(dib, index) in dibList" :key="index" :dib="dib">
      {{ dib.aptName }}
    </dib-info-item>
  </b-container>
</template>

<script>
import DibInfoItem from "@/components/member/mypage/item/DibInfoItem.vue";
import { mapState, mapActions } from "vuex";
const dibStore = "dibStore";
const memberStore = "memberStore";
export default {
  name: "dibInfo",
  components: {
    DibInfoItem,
  },
  computed: {
    ...mapState(dibStore, ["dibList"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  mounted() {
    this.getList(this.userInfo.userid);
  },
  methods: {
    ...mapActions(dibStore, ["getList", "removeDib"]),
  },
};
</script>

<style></style>
