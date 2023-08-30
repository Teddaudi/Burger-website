import SignUp from './SignUp';
import SignIn from './SignIn';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../../App';

const Nav = () => {
  // You can manage authentication state using state or Redux
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handler to set authentication status
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Routes>
      <Route
        path="/signup"
        element={<SignUp onAuthentication={handleAuthentication} />}
      />
      <Route
        path="/signin"
        element={<SignIn onAuthentication={handleAuthentication} />}
      />
      <Route
        path="/app/*"
        element={<AppWrapper isAuthenticated={isAuthenticated} />}
      />
    </Routes>
  );
};

// AppWrapper component
const AppWrapper = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return <App isAuthenticated={isAuthenticated} />;
};

export default Nav;
