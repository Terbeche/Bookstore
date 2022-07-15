import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { retrieveBooks } from '../redux/books/books';
import InputBook from './InputBook';
import BooksList from './BooksList';
import './Home.css';

const Home = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

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
