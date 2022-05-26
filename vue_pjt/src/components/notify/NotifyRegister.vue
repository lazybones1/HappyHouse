<template>
  <b-container class="bv-example-row mt-3">
    <b-row v-if="isAdmin">
      <b-col>
        <b-alert show><h3>공지사항 작성</h3></b-alert>
      </b-col>
    </b-row>
    <notify-input-item type="register" />
  </b-container>
</template>

<script>
import NotifyInputItem from "@/components/notify/item/NotifyInputItem.vue";
import { mapState } from "vuex";
const memberStore = "memberStore";
export default {
  name: "NotifyWrite",
  components: {
    NotifyInputItem,
  },
  computed: {
    ...mapState(memberStore, ["isAdmin"]),
  },
};
</script>

<style></style>
