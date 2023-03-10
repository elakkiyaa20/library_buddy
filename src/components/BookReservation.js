import React, { useState } from 'react';
import  reserveBook  from '../services/bookService';
import Notification from './Notification';

const BookReservation = ({ book, currentUser }) => {
  const [notification, setNotification] = useState(null);

  const handleReservation = async () => {
    try {
      await reserveBook(book.id, currentUser.id);
      setNotification({
        type: 'success',
        message: `You have successfully reserved ${book.title}. We will notify you when it becomes available.`,
      });
    } catch (error) {
      setNotification({
        type: 'error',
        message: error.response.data.error,
      });
    }
  };

  return (
    <>
      {book.availableCopies > 0 ? (
        <button onClick={handleReservation}>Reserve</button>
      ) : (
        <button disabled>Unavailable</button>
      )}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};

export default BookReservation;
