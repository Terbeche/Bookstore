const CHECK_STATUS = 'bookstore/categories/CHECK STATUS';

export default function reducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
