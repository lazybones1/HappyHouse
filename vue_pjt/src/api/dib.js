import { apiInstance } from "./index.js";

const api = apiInstance();
// const apt = aptInstance();

function dibsList(userid, success, fail) {
  api.post(`/dib/list`, JSON.stringify(userid)).then(success).catch(fail);
}

function getdib(params, success, fail) {
  api.post(`/dib/one`, { params: params }).then(success).catch(fail);
}

function adddib(dib, success, fail) {
  api.post(`/dib/add`, JSON.stringify(dib)).then(success).catch(fail);
}

function removedib(dib, success, fail) {
  api.post(`/dib/remove`, JSON.stringify(dib)).then(success).catch(fail);
}

export { dibsList, adddib, getdib, removedib };
