import React from 'react';
import { Link } from 'react-router-dom';
import BookReservation from './BookReservation';

const BookItem = ({ book, currentUser }) => {
  return (
    <div className="book-item">
      <div className="book-item__details">
        <h2 className="book-item__title">{book.title}</h2>
        <p className="book-item__author">by {book.author}</p>
        <p className="book-item__copies">{book.availableCopies} available copies</p>
      </div>
      <div className="book-item__actions">
        {currentUser ? (
          <BookReservation book={book} currentUser={currentUser} />
        ) : (
          <Link to="/login">Log in to reserve</Link>
        )}
      </div>
    </div>
  );
};

export default BookItem;
