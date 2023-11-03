import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const history = useHistory();

  const handleSignUp = () => {
    // Implement your sign-up logic here

    // Assuming sign-up was successful
    setSignUpSuccess(true);
  };

  const handleGoToLoginPage = () => {
    history.push('/login');
  };

  return (
    <div>
      <h2>Sign Up Page</h2>

      <div>
        <label>
          First Name:
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" />
        </label>
      </div>

      <button onClick={handleSignUp}>Sign Up</button>

      {signUpSuccess && <p>Sign up was successful!</p>}

      <button onClick={handleGoToLoginPage}>Go to Login Page</button>
    </div>
  );
};

export default SignUpPage;
