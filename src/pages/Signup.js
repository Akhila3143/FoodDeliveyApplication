import React from "react";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Create a password" />
          <button className="signup-button">Sign Up</button>
        </form>

        <div className="divider">Or Sign Up with</div>

        <div className="social-login">
          <button className="google">
            <FaGoogle className="icon" /> 
          </button>
          <button className="twitter">
            <FaTwitter className="icon" /> 
          </button>
          <button className="facebook">
            <FaFacebook className="icon" /> 
          </button>
        </div>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
