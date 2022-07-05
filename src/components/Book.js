import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Book = () => (

  <div className="pt-5 container">
    <h3>List of books</h3>
    <button type="button">
      <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
    </button>
  </div>
);

export default Book;
