<template>
  <b-container class="bv-example-row mt-3">
    <b-row v-if="isAdmin">
      <b-col>
        <b-alert show><h3>공지사항 수정</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="1"> </b-col>
      <b-col>
        <notify-input-item type="modify" />
      </b-col>
      <b-col cols="1"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NotifyInputItem from "@/components/notify/item/NotifyInputItem.vue";
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
  name: "NotifyModify",
  components: {
    NotifyInputItem,
  },

  computed: {
    ...mapState(memberStore, ["isAdmin"]),
  },
};
</script>

<style></style>
