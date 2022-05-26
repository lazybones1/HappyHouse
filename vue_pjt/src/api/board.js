import { apiInstance } from "./index.js";

const api = apiInstance();
// const apt = aptInstance();

function boardList(success, fail) {
  api.get(`/board_table`).then(success).catch(fail);
}

function boardDetail(board_no, success, fail) {
  api.get(`/board_table/${board_no}`).then(success).catch(fail);
}

function insertBoard(params, success, fail) {
  api.post(`/board_table`, JSON.stringify(params)).then(success).catch(fail);
}

function deletBoard(board_no, success, fail) {
  api.delete(`/board_table/${board_no}`).then(success).catch(fail);
}

function updateBoard(params, success, fail) {
  api
    .put(`/board_table/${params.board_no}`, JSON.stringify(params))
    .then(success)
    .catch(fail);
}

export { boardList, boardDetail, insertBoard, deletBoard, updateBoard };
