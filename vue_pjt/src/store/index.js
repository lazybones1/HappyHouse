import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import aptStore from "@/store/modules/aptStore.js";
import memberStore from "@/store/modules/memberStore.js";
import newsStore from "@/store/modules/newsStore.js";
import dibStore from "@/store/modules/dibStore.js";
import notifyStore from "@/store/modules/notifyStore.js";
import boardStore from "@/store/modules/boardStore.js";
import commentStore from "@/store/modules/commentStore.js";

const store = new Vuex.Store({
  modules: {
    aptStore,
    memberStore,
    newsStore,
    dibStore,
    notifyStore,
    boardStore,
    commentStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});

export default store;
