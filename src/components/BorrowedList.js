import React, { useState, useEffect } from 'react';
import bookService from '../services/bookService';

function BorrowedList() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    async function fetchBorrowedBooks() {
      const books = await bookService.getBorrowedBooks();
      setBorrowedBooks(books);
    }
    fetchBorrowedBooks();
  }, []);

  return (
    <div>
      <h2>Borrowed Books</h2>
      {borrowedBooks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
             
              <th>Borrower</th>
          <th>Borrowed Date</th>
          <th>Return Date</th>
          <th>Extend</th>
        </tr>
      </thead>
      <tbody>
        {borrowedBooks.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.borrower}</td>
            <td>{book.borrowedDate}</td>
            <td>{book.returnDate}</td>
            <td>
              <button
                onClick={() => {
                  bookService.extendBook(book.id);
                  setBorrowedBooks((prevBorrowedBooks) =>
                    prevBorrowedBooks.map((b) =>
                      b.id === book.id
                        ? { ...b, returnDate: b.returnDate + 7 * 24 * 60 * 60 * 1000 }
                        : b
                    )
                  );
                }}
              >
                Extend
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No borrowed books.</p>
  )}
</div>
);
}

export default BorrowedList;
