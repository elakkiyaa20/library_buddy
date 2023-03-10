const baseUrl = 'http://localhost:3001/books';

const getAllBooks = async () => {
const response = await fetch(baseUrl);
return await response.json();
};

const getBook = async (id) => {
const response = await fetch(`${baseUrl}/${id}`);
return await response.json();
};

const createBook = async (book) => {
const response = await fetch(baseUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(book),
});
return await response.json();
};

const borrowBook = async (id, borrower) => {
const response = await fetch(`${baseUrl}/${id}`, {
method: 'PATCH',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ available: false, borrower, borrowedDate: Date.now(), returnDate: Date.now() + 14 * 24 * 60 * 60 * 1000 }),
});
return await response.json();
};

const returnBook = async (id) => {
const response = await fetch(`${baseUrl}/${id}`, {
method: 'PATCH',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ available: true, borrower: null, borrowedDate: null, returnDate: null }),
});
return await response.json();
};

const getBorrowedBooks = async () => {
const response = await fetch(`${baseUrl}?available=false`);
return await response.json();
};

const reserveBook = async () => {
    const response = await fetch(`${baseUrl}?available=true`);
    return await response.json();
    };

const extendBook = async (id) => {
const response = await fetch(`${baseUrl}/${id}`, {
method: 'PATCH',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ returnDate: Date.now() + 7 * 24 * 60 * 60 * 1000 }),
});
return await response.json();
};

export default {
getAllBooks,
getBook,
createBook,
borrowBook,
returnBook,
getBorrowedBooks,
extendBook,
reserveBook
};
