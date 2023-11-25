import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import a CSS file for styling (create this file later)

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/students">Students</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses">Courses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
