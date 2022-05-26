import {
  boardList,
  boardDetail,
  insertBoard,
  deletBoard,
  updateBoard,
} from "@/api/board.js";

const boardStore = {
  namespaced: true,
  state: {
    Content: [],
    board: {},
  },

  getters: {},

  mutations: {
    GET_BOARD_LIST(state, list) {
      state.Content = list;
    },
    GET_BOARD(state, list) {
      state.board = list;
    },
    CLEAR_BOARD_LIST(state) {
      state.Content = [];
    },
  },

  actions: {
    getBoardList: ({ commit }) => {
      boardList(
        ({ data }) => {
          commit("GET_BOARD_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getBoard: ({ commit }, board_no) => {
      boardDetail(
        board_no,
        ({ data }) => {
          commit("GET_BOARD", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    addBoard: ({ commit }, params) => {
      insertBoard(
        params,
        ({ data }) => {
          console.log(commit + data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    removeBoard: ({ commit }, board_no) => {
      deletBoard(
        board_no,
        ({ data }) => {
          console.log(commit + data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    updateBoard: ({ commit }, params) => {
      updateBoard(
        params,
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

export default boardStore;
