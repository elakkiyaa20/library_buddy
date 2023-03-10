import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bookService from '../services/bookService';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [isbn, setIsbn] = useState('');
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await bookService.createBook({ title, author, description, isbn });
      setTitle('');
      setAuthor('');
      setDescription('');
      setIsbn('');
      history.push('/');
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
      </div>
      <div>
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          value={isbn}
          onChange={({ target }) => setIsbn(target.value)}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default BookForm;