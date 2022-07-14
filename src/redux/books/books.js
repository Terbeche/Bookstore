import { v4 as uuidv4 } from 'uuid';
import BookService from '../../services/BooksService';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const RETRIEVE_BOOKS = 'bookstore/books/RETRIEVE_BOOKS';

const initialState = {};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_BOOKS:
      return payload;
    case ADD_BOOK:
      return { ...state, ...payload };
    case REMOVE_BOOK:
      // eslint-disable-next-line max-len
      return Object.fromEntries(Object.entries(state).filter((book) => book[0] !== payload.id));
      // return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};

export const retrieveBooks = () => async (dispatch) => {
  try {
    const res = await BookService.getAll();
    dispatch({
      type: RETRIEVE_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const addBook = (title, author) => async (dispatch) => {
  try {
    // eslint-disable-next-line camelcase
    const item_id = uuidv4();
    const category = null;
    const newBook = {
      // eslint-disable-next-line camelcase
      item_id,
      title,
      author,
      category,
    };
    await BookService.add(newBook);
    dispatch({
      type: ADD_BOOK,
      payload: {
        // eslint-disable-next-line camelcase
        item_id: [
          {
            title,
            author,
            category,
          },
        ],
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await BookService.remove(id);
    dispatch({
      type: REMOVE_BOOK,
      payload: { id },
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default reducer;
