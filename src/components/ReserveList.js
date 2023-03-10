import React from 'react';
import BookItem from './BookItem';

const ReserveList = ({ books, currentUser }) => {
  const reservedBooks = books.filter(
    (book) => book.reserver && book.reserver.id === currentUser.id
  );

  return (
    <div className="reserve-list">
      <h2>My Reserved Books</h2>
      {reservedBooks.length === 0 ? (
        <p>You have not reserved any books.</p>
      ) : (
        reservedBooks.map((book) => (
          <BookItem key={book.id} book={book} currentUser={currentUser} />
        ))
      )}
    </div>
  );
};

export default ReserveList;
