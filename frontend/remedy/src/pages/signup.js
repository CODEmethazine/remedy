import React from "react";
import './signup.css';


const SignUp = () => {
  return (
    <body>
      <div class="container">
        <div class="form-box">
          <h1 id="title"> Sign up</h1>
          <form>
            <div class="input-group">
              <div class="input-field" id="nameField">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="Name" />
              </div>
              <div class="input-field">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email address" />
              </div>
              <div class="input-field">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>

              <div class="btn-field">
                <button type="button" id="signupBtn">
                  {" "}
                  Sign up
                </button>
                <button type="button" id="signinBtn" class="disable">
                  {" "}
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <script src="singupJS.js"></script>
    </body>

  );

  
};

export default SignUp;
