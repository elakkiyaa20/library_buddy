import React from 'react';
import BookItem from './BookItem';

const ReturnedList = ({ books, currentUser }) => {
  const returnedBooks = books.filter(
    (book) => book.borrower && book.borrower.id === currentUser.id && book.returned
  );

  return (
    <div className="returned-list">
      <h2>My Returned Books</h2>
      {returnedBooks.length === 0 ? (
        <p>You have not returned any books.</p>
      ) : (
        returnedBooks.map((book) => (
          <BookItem key={book.id} book={book} currentUser={currentUser} />
        ))
      )}
    </div>
  );
};

export default ReturnedList;
