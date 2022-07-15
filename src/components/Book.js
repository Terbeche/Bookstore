import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

const Book = ({ bookId, title, author }) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => dispatch(removeBook(id));

  return (
    <div className="Book-container">

      <div className="Book-Information">
        <h3 className="Category">Programming</h3>
        <h3 className="Title">{title}</h3>
        <h3 className="Author">{author}</h3>
        <div className="Options">
          <button type="button" className="Book-buttons">
            Comments
          </button>
          <button type="button" className="Book-buttons" onClick={() => deleteBook(bookId)}>
            Remove
          </button>
          <button type="button" className="Book-buttons">
            Edit
          </button>
        </div>
      </div>

      <div className="Progress-Container">

        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="inside-circle" />
          </div>
        </div>

        <div className="Progress-Detail">
          <span className="-Percent-Complete">
            75%
          </span>
          <span className="Completed Text-Style-2">
            Completed
          </span>
        </div>
      </div>

      <div className="Book-Detail">
        <span className="Current-Chapter">
          CURRENR CHAPTER
        </span>
        <span className="Current-Lesson Text-Style-4">
          Introduction
        </span>
        <button type="button" className="Rectangle-2">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

Book.propTypes = PropTypes.node;

export default Book;
