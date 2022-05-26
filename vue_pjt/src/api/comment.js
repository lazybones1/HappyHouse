import { apiInstance } from "./index.js";

const api = apiInstance();
// const apt = aptInstance();

function commentList(board_no, success, fail) {
  api.get(`/comment_table/${board_no}`).then(success).catch(fail);
}

function insertComment(params, success, fail) {
  api.post(`/comment_table`, JSON.stringify(params)).then(success).catch(fail);
}

function deletComment(comment_no, success, fail) {
  api.delete(`/comment_table/${comment_no}`).then(success).catch(fail);
}

function updateComment(params, success, fail) {
  api.put(`/comment_table`, { params: params }).then(success).catch(fail);
}

export { commentList, insertComment, deletComment, updateComment };
