import React from "react";
import "./SignIn.css";
import { useState } from "react";

const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    // console.log("Sign In - Email:", email);
    // console.log("Sign In - Password:", password);
  };

  return (
    <>
      <div className="formIn-container">
        <form className="main-formIn" action="" onSubmit={handleSignIn}>
          <h2 className="sign-in">LogIn</h2>
          <div>
          <input
              placeholder=" Enter Your Email"
              type="email"
              id="signUpEmail"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              id="signInPassword"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-combine">
            <div className="forget-pass">Forgot Password?</div>
            <div className="login-btn">
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
