import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}

export const addBook = (book) => {
  const action = {
    type: ADD_BOOK,
    payload: {
      ...book,
      id: uuidv4(),
    },
  };
  return action;
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});
