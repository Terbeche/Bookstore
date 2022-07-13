import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defaultState = [
  { title: 'The pragmatic programmer', author: 'Hunt Andrew & Thomas David', id: uuidv4() },
  { title: 'Learn to Program', author: 'Chris Pine', id: uuidv4() },
  { title: 'Learning JavaScript', author: 'Ethan Brown', id: uuidv4() },
];
export default function reducer(state = defaultState, action) {
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
