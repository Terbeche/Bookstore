import React from 'react';
import InputBook from './InputBook';
import BooksList from './BooksList';

const Home = () => (
  <div className="container">
    <div className="inner">
      <BooksList />
      <InputBook />

    </div>
  </div>
);

export default Home;
