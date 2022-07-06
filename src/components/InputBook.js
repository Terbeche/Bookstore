import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import './InputBook.css';

const InputBook = () => (
  <form className="form-container">
    <input
      type="text"
      className="input-text"
      placeholder="Add book..."
      name="title"
    />
    <input
      type="text"
      className="input-text"
      placeholder="Add author..."
      name="author"
    />
    <button type="button" className="input-submit">
      <FaPlusCircle
        style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
      />
    </button>
  </form>
);

InputBook.propTypes = PropTypes.node;

export default InputBook;
