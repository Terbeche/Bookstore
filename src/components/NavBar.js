import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { ImUser } from 'react-icons/im';
import { FiMenu } from 'react-icons/fi';
import './NavBar.css';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="Nav">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: 'red', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={`Nav-links menuNav ${navbarOpen ? ' showMenu' : ''}`}>

        <li>
          <Link
            onClick={() => closeMenu()}
            to="/"
            className="Bookstore-CMS"
          >
            Bookstore
          </Link>
        </li>

        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link BOOKS"
            to="/"
          >
            Books
          </Link>

        </li>

        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link CATEGORIES"
            to="/categories"
          >
            Categories
          </Link>
        </li>
      </ul>
      <Link
        onClick={() => closeMenu()}
        className="Nav-link"
        to="/"
      >
        <ImUser className="User-link" style={{ color: '#0290ff', fontSize: '16px' }} />

      </Link>
    </nav>
  );
};

export default NavBar;
