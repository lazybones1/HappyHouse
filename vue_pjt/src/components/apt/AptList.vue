<template>
  <b-container>
    <div class="info-list-title" @click="toggleList">아파트 매매 정보</div>
    <div class="info-list-contents" v-if="listToggle">
      <apt-list-item
        class="info-list-content"
        v-for="(apt, index) in areaApts"
        :key="index"
        :apt="apt"
        v-on:showDetail="showDetail"
      >
      </apt-list-item>
    </div>
    <div class="info-list-title" @click="toggleAround">주변 정보</div>
    <div class="info-list-contents" v-if="aroundToggle">
      <apt-category-item
        class="info-list-content"
        v-for="(item, index) in category"
        :key="index"
        :item="item"
      >
      </apt-category-item>
    </div>
  </b-container>
</template>

<script>
import AptListItem from "@/components/apt/item/AptListItem.vue";
import AptCategoryItem from "@/components/apt/item/AptCategoryItem.vue";
import { mapState } from "vuex";
const aptStore = "aptStore";

export default {
  name: "aptList",
  props: {
    category: Array,
    areaApts: Array,
  },
  components: {
    AptListItem,
    AptCategoryItem,
  },
  data() {
    return {
      listToggle: false,
      aroundToggle: false,
    };
  },
  computed: {
    ...mapState(aptStore, ["apts"]),
  },
  methods: {
    showDetail(apt) {
      this.$emit("showDetail", apt);
    },
    toggleList() {
      this.listToggle = !this.listToggle;
    },
    toggleAround() {
      this.aroundToggle = !this.aroundToggle;
    },
  },
};
</script>

<style scoped>
.info-list-title {
  font-size: 25px;
  padding: 20px;
  font-weight: bold;
  border-bottom: 1px black dotted;
}
.info-list-contents {
  overflow: auto;
  padding: 10px;
  height: 560px;
}
</style>
