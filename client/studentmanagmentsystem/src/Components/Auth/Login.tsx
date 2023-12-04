import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { loginUser, logoutUser } from '../../api/api';

interface LoginProps {
  updateUsername: (newUsername: string) => void;
}

const Login: React.FC<LoginProps> = ({ updateUsername }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = { username, password };
    try {
      const result = await loginUser(data);

      if (result === "ok") {

        updateUsername(username);

        navigate("/students");
      }
    } catch (error) {
      // Handle error, show error message, etc.
    }
  };

  const handleLogout = async () => {
    // Assuming you have a logoutUser function in your API
    await logoutUser();
    // Redirect to the login page or any other desired page
    navigate("/login");
  };
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <label>
                Username:
                <input
                  type="text"
                  className="login__input"
                  placeholder="User name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div className="login__field">
              <label>
                Password:
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <button type="button" onClick={handleLogin} className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
function setShowLoginHeader(username: string) {
  throw new Error('Function not implemented.');
}

function updateUsername(newUsername: any) {
  throw new Error('Function not implemented.');
}

