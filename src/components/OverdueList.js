import React from 'react';
import BookItem from './BookItem';

const OverdueList = ({ books, currentUser }) => {
  const overdueBooks = books.filter(
    (book) => book.borrower && book.dueDate < new Date()
  );

  return (
    <div className="overdue-list">
      <h2>Overdue Books</h2>
      {overdueBooks.length === 0 ? (
        <p>No overdue books.</p>
      ) : (
        overdueBooks.map((book) => (
          <BookItem key={book.id} book={book} currentUser={currentUser} />
        ))
      )}
    </div>
  );
};

export default OverdueList;
