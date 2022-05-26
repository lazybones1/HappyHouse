import {
  commentList,
  insertComment,
  deletComment,
  updateComment,
} from "@/api/comment.js";

const commentStore = {
  namespaced: true,
  state: {
    Comment: [],
  },

  getters: {},

  mutations: {
    GET_COMMENT_LIST(state, list) {
      state.Comment = list;
    },
    CEARL_COMMENT(state) {
      state.Comment = [];
    },
  },

  actions: {
    getCommentList: ({ commit }, params) => {
      commentList(
        params,
        ({ data }) => {
          console.log(commit + data);
          commit("GET_COMMENT_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    addComment: ({ commit }, params) => {
      insertComment(
        params,
        ({ data }) => {
          console.log(commit + data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    removeComment: ({ commit }, board_no) => {
      deletComment(
        board_no,
        ({ data }) => {
          console.log(commit + data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    updateComment: ({ commit }, params) => {
      updateComment(
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

export default commentStore;
