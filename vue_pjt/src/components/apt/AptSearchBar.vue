<template>
  <div class="apt-search-form">
    <div class="search-title">지역 검색</div>
    <b-form-select
      v-model="selected_sido"
      :options="sidos"
      @change="gugunList"
      class="search-option"
      >시도</b-form-select
    >
    <b-form-select
      v-model="selected_gugun"
      :options="guguns"
      class="search-option"
      >구군</b-form-select
    >
    <b-button
      variant="outline-primary"
      class="btn-area-search"
      @click="searchApt"
      >검색</b-button
    >
    <b-input-group @click="openFilter" :size="sm" class="filter-input-group">
      <b-form-input disabled placeholder="필터 추가" size="sm"></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-primary" size="sm" class="filterToggle"
          >필터</b-button
        >
      </b-input-group-append>
    </b-input-group>

    <div v-if="toggleFilter">
      <b-input-group class="mt-3">
        <b-form-input
          v-model="filterAptName"
          placeholder="원하는 아파트 이름을 입력하세요"
          @keyup="setName"
        ></b-form-input>
      </b-input-group>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
const aptStore = "aptStore";
export default {
  name: "aptSearchBar",
  data() {
    return {
      selected_sido: null,
      selected_gugun: null,
      selected_dong: null,

      toggleFilter: false,
      filterAptName: "",
    };
  },
  computed: {
    ...mapState(aptStore, ["sidos", "guguns"]),
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.getSido();
    this.CLEAR_APTS();
    this.CLEAR_APT();
    this.SET_FILTERAPTNAME("");
  },
  methods: {
    ...mapActions(aptStore, [
      "getSido",
      "getGugun",
      "getAptList",
      "setSelectedSido",
    ]),
    ...mapMutations(aptStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "SET_SELECTED_SIDO",
      "CLEAR_APTS",
      "CLEAR_APT",
      "SET_FILTERAPTNAME",
    ]),
    gugunList() {
      this.CLEAR_GUGUN_LIST();
      this.selected_gugun = null;
      if (this.selected_sido) this.getGugun(this.selected_sido);
    },
    searchApt() {
      if (this.selected_gugun) {
        for (let key of this.sidos) {
          if (this.selected_sido === key.value) {
            this.setSelectedSido(key.text);
          }
        }
        this.$emit("searchApt", this.selected_gugun);
      }
    },
    openFilter() {
      this.SET_FILTERAPTNAME("");
      this.toggleFilter = !this.toggleFilter;
    },
    setName() {
      this.SET_FILTERAPTNAME(this.filterAptName);
    },
  },
};
</script>

<style scoped>
.apt-search-form {
  background: rgb(255, 255, 255);
  border: 1px black solid;
  position: absolute;
  top: 130px;
  left: 40px;
  z-index: 3;
  width: 300px;
  height: 110px;
}
.search-option {
  font-size: 13px;
  margin: 5px;
}
.btn-area-search {
  width: 50px;
  height: 22px;
  font-size: 10px;
  line-height: 10px;
  margin-left: 3px;
}
.search-title {
  font-weight: bold;
  font-size: 20px;
  padding-top: 8px;
}
.filter-input-group {
  padding: 5px 10px 0 10px;
}
</style>
