import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Library</Link></li>
        <li><Link to="/borrowed">Borrowed</Link></li>
        <li><Link to="/reserved">Reserved</Link></li>
        <li><Link to="/returned">Returned</Link></li>
        <li><Link to="/overdue">Overdue</Link></li>
        <li><Link to="/user">Account</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
