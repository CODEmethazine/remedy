import './signup.css';
import React from 'react';

const SignUp = () => {
  return (
    <body>
    <div class="signup-container">
        <h1>Sign Up</h1>
        <form id="signupForm">
            <input type="text" id="name" placeholder="Name" required/>
            <input type="email" id="email" placeholder="Email" required/>
            <input type="password" id="password" placeholder="Password" required/>
            <button type="submit" onclick="signup()">Sign Up</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
  );
};

export default SignUp;
