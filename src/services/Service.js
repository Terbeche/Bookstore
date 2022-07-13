import http from '../http-common';
const appId = 'fkldjfkdjljs';
const getAll = () => http.get(`/apps/${appId}/books`);
const get = (id) => http.get(`/apps/${appId}/books/${id}`);
const create = (book) => http.post(`/apps/${appId}/books`, book);
const remove = (id) => http.delete(`/apps/${appId}/books/${id}`);
const Service = {
  getAll,
  get,
  create,
  remove,
};
export default Service;
