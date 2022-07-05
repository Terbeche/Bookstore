import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputBook from './InputBook';
import BooksList from './BooksList';

const Home = () => {
  function getInitialBooks() {
    // getting stored items
    const temp = localStorage.getItem('books');
    const savedBooks = JSON.parse(temp);
    return savedBooks || [];
  }
  const [books, setBooks] = useState(getInitialBooks());

  const handleChange = (id) => {
    setBooks((prevState) => prevState.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          completed: !book.completed,
        };
      }
      return book;
    }));
  };

  const delBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  const addBookItem = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      completed: false,
    };
    setBooks([...books, newBook]);
  };

  const setUpdate = (updatedTitle, updatedAuthor, id) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          // eslint-disable-next-line no-param-reassign
          book.title = updatedTitle;
          // eslint-disable-next-line no-param-reassign
          book.author = updatedAuthor;
        }
        return book;
      }),
    );
  };

  useEffect(() => {
    // storing books items
    const temp = JSON.stringify(books);
    localStorage.setItem('books', temp);
  }, [books]);

  return (
    <div className="container">
      <div className="inner">
        <BooksList
          books={books}
          handleChangeProps={handleChange}
          deleteBookProps={delBook}
          setUpdate={setUpdate}
        />
        <InputBook addBookProps={addBookItem} />

      </div>
    </div>
  );
};

export default Home;
