import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import InputBook from './InputBook';
import BooksList from './BooksList';

const Home = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <div className="container">
      <div className="inner">
        <BooksList books={books} />
        <InputBook />
      </div>
    </div>
  );
};

export default Home;
