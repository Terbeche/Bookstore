import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import './InputBook.css';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const [inputBook, setInpuBook] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(inputBook));
  };

  const handleInputChange = (event) => {
    setInpuBook((book) => ({
      ...book,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Add book..."
        name="title"
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="input-text"
        placeholder="Add author..."
        name="author"
        onChange={handleInputChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};

export default InputBook;
