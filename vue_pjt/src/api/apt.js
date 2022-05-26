import { apiInstance } from "./index.js";

const api = apiInstance();
// const apt = aptInstance();

function sidoList(success, fail) {
  api.get(`/map/sido`).then(success).catch(fail);
}

function gugunList(params, success, fail) {
  api.get(`/map/gugun`, { params: params }).then(success).catch(fail);
}

function aptList(params, success, fail) {
  api.get(`/apt/list`, { params: params }).then(success).catch(fail);
}

export { sidoList, gugunList, aptList };
