import http from '../http-common';

const getAll = () => http.get();
const add = (data) => http.post('', data);
const remove = (id) => http.delete(`/${id}`);

const BookService = {
  getAll,
  add,
  remove,
};

export default BookService;
