import React from "react";
import "./SignUp.css";
import { useState } from "react";
const SignUp = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Setpassword, setSetpassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  
  const handleSignUp = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign Up - Email:", email);
    console.log("Sign Up - Password:", password);
  };
  return (
    <>
      <div className="main-Upform-container">
        <form action="" className="main-Upform" onSubmit={handleSignUp}>
          <h2 className="sign-up">Sign Up</h2>
          <div>
            <input
              placeholder="Name"
              type="text"
              id="upName"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              placeholder=" Enter Your Email"
              type="email"
              id="signUpEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              placeholder="Set Password"
              type="text"
              id="SetPassword"
              value={Setpassword}
              onChange={(e) => setSetpassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              placeholder="Confirm Password"
              type="password"
              id="upPassword"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="upForm-btn">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
