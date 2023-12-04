
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface UserData {
  username: string;
}

interface HeaderProps {
  showLoginLink: boolean;
  userData?: UserData;
  onLogout?: () => void; // New prop for handling logout
}

const Header: React.FC<HeaderProps> = ({ showLoginLink, userData, onLogout }) => {
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
        <div className="user-info">
          {userData ? (
            <>
              {/* Display user information based on the received data */}
              <span>Welcome, {userData.username}!</span>
              {onLogout && (
                <button onClick={onLogout} className="logout-button">
                  Logout
                </button>
              )}
            </>
          ) : showLoginLink && (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
