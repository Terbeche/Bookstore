import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({ reducer });
export default store;
