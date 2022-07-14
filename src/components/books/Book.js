import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { removeBook } from '../../redux/books/books';

const Book = ({ bookId, title, author }) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => dispatch(removeBook(id));

  return (
    <div className="container">
      <h3>{title}</h3>
      <h3>{author}</h3>
      <button type="button" onClick={() => deleteBook(bookId)}>
        <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
      </button>
    </div>
  );
};

Book.propTypes = PropTypes.node;

export default Book;
