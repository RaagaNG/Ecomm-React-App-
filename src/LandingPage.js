import React from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  const handleSignUpClick = () => {
    history.push('/signup');
  };

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={handleSignUpClick}>Sign Up</button>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default LandingPage;
