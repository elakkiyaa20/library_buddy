import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bookService from '../services/bookService';

function BookDetails() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      const fetchedBook = await bookService.getBook(id);
      setBook(fetchedBook);
    }
    fetchBook();
  }, [id]);

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Available: {book.available ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
}

export default BookDetails;
