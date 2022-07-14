import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categoties/categories';

const reducer = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
