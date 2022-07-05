/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="Nav">

    <Link
      to="/"
      className="Nav-brand"
    >
      BookStore
    </Link>
    <ul className="Nav-items">
      <li className="Nav-item">
        <Link
          className="Nav-link"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="Nav-item">
        <Link
          className="Nav-link"
          to="/categories"
        >
          Categories
        </Link>
      </li>

    </ul>
  </nav>
);

export default NavBar;
