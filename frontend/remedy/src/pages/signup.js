import './signup.css';
import React, { useState } from 'react';

const SignUp = () => {
  const [showNameField, setShowNameField] = useState(true);
  const [title, setTitle] = useState("Sign Up");

  const handleSignInClick = () => {
    setShowNameField(false);
    setTitle("Log In");
  };

  const handleSignUpClick = () => {
    setShowNameField(true);
    setTitle("Sign Up");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>{title}</h1>
        <form>
          <div className="input-group">
            <div className={`input-field ${showNameField ? '' : 'hidden'}`}>
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email address" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>

            <div className="btn-field">
              <button type="button" onClick={handleSignUpClick}>
                Sign up
              </button>
              <button type="button" onClick={handleSignInClick} className={!showNameField ? 'disable' : ''}>
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
