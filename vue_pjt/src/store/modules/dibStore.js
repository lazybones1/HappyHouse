import { dibsList, adddib, getdib, removedib } from "@/api/dib.js";

const dibStore = {
  namespaced: true,
  state: {
    dibList: [],
  },
  getters: {},
  mutations: {
    GET_DIB_LIST(state, dibs) {
      state.dibList = dibs;
    },
  },
  actions: {
    getList: ({ commit }, userid) => {
      dibsList(
        userid,
        ({ data }) => {
          commit("GET_DIB_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getDib: ({ commit }, dibsNo) => {
      const param = dibsNo;
      getdib(
        param,
        ({ data }) => {
          console.log(commit + data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    addDib: ({ commit }, dib) => {
      adddib(
        dib,
        ({ data }) => {
          console.log(commit + data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    removeDib: ({ commit }, dib) => {
      removedib(
        dib,
        ({ data }) => {
          console.log(commit + data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default dibStore;
