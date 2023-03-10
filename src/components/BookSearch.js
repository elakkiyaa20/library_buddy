import React, { useState } from 'react';
import BookItem from './BookItem';

const BookSearch = ({ books, currentUser }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-search">
      <input
        type="text"
        placeholder="Search books by title"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        filteredBooks.map((book) => (
          <BookItem key={book.id} book={book} currentUser={currentUser} />
        ))
      )}
    </div>
  );
};

export default BookSearch;
