import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">Bookstore</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
