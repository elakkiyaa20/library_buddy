import React, { useState, useEffect } from 'react';
import bookService from '../services/bookService';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAllBooks().then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.length ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.available ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books.</p>
      )}
    </div>
  );
}

export default BookList;
