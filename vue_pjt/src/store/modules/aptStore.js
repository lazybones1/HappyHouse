import { sidoList, gugunList, aptList } from "@/api/apt.js";

const aptStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    sido: "",
    apts: [],
    apt: null,
    filterAptName: "",
  },

  getters: {},

  mutations: {
    //시군구동 불러오기
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },
    //아파트 정보
    SET_APT_LIST(state, apts) {
      let tmpAptList = [];
      if (state.filterAptName.trim() != "") {
        apts.some((item) => {
          if (item.아파트.trim().indexOf(state.filterAptName.trim()) != -1) {
            tmpAptList.push(item);
          }
        });
        state.apts = tmpAptList;
      } else {
        state.apts = apts;
      }
    },
    SET_DETAIL_APT(state, apt) {
      state.apt = apt;
    },
    SET_SELECTED_SIDO(state, sido) {
      state.sido = sido;
    },
    CLEAR_APTS(state) {
      state.apts = [];
    },
    CLEAR_APT(state) {
      state.apt = null;
    },
    SET_FILTERAPTNAME(state, name) {
      state.filterAptName = name;
    },
  },

  actions: {
    getSido: ({ commit }) => {
      sidoList(
        ({ data }) => {
          // console.log(data);
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    getGugun: ({ commit }, sidoCode) => {
      const params = {
        sido: sidoCode,
      };
      gugunList(
        params,
        ({ data }) => {
          // console.log(commit, response);
          commit("SET_GUGUN_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getAptList: ({ commit }, gugunCode) => {
      const params = {
        LAWD_CD: gugunCode,
        DEAL_YMD: "202110",
        pageNo: 1,
      };
      aptList(
        params,
        (response) => {
          commit("SET_APT_LIST", response.data.response.body.items.item);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    detailApt({ commit }, apt) {
      commit("SET_DETAIL_APT", apt);
    },
    setSelectedSido: ({ commit }, sido) => {
      commit("SET_SELECTED_SIDO", sido);
    },
  },
};

export default aptStore;
