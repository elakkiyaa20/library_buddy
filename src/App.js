import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import BookForm from './components/BookForm';
import BorrowedList from './components/BorrowedList';
import ReserveList from './components/ReserveList';
import ReturnedList from './components/ReturnedList';
import OverdueList from './components/OverdueList';
import Notification from './components/Notification';
import UserForm from './components/UserForm';

function App() {
  return (
    <Router>
      <Header />
      <Notification />
      <Routes>
        <Route exact path="/" component={BookList} />
        <Route path="/account" component={LoginForm} />
        <Route path="/books/new" component={BookForm} />
        <Route path="/books/:id" component={BookDetails} />
        <Route path="/borrowed" component={BorrowedList} />
        <Route path="/reserved" component={ReserveList} />
        <Route path="/returned" component={ReturnedList} />
        <Route path="/overdue" component={OverdueList} />
        <Route path="/user" component={UserForm} />
      </Routes>
    </Router>
  );
}

export default App;