import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const deleteBook = () => dispatch(removeBook(id));

  return (
    <div className="container">
      <h3>{title}</h3>
      <h3>{author}</h3>
      <button type="button" onClick={deleteBook}>
        <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
      </button>
    </div>
  );
};

Book.propTypes = PropTypes.node;

export default Book;
