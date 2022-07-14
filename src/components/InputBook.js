import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { addBook } from '../redux/books/books';
import './InputBook.css';

function InputBook() {
  const initFormState = {
    title: '',
    author: '',
  };

  const [book, setBook] = useState(initFormState);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const resetForm = () => {
    setBook({ ...book, title: '', author: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author } = book;

    dispatch(addBook(title, author));
    resetForm();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Add book..."
        name="title"
        value={book.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="input-text"
        placeholder="Add author..."
        name="author"
        value={book.author}
        onChange={handleInputChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
}

export default InputBook;
