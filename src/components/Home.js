import React from 'react';
import { useSelector } from 'react-redux';
import InputBook from './InputBook';
import BooksList from './BooksList';

const Home = () => {
  const books = useSelector((state) => state.books);
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
