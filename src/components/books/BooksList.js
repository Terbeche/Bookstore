import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

function BooksList({ books }) {
  return (
    <>
      <ul>
        {Object.keys(books).map((book) => (
          <Book
            key={book}
            bookId={book}
            title={books[book][0].title}
            author={books[book][0].author}
          />
        ))}
      </ul>
    </>
  );
}

BooksList.propTypes = PropTypes.node.isRequired;

export default BooksList;
