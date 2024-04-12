import React from 'react'
import './signin.css'
export default function SignIn() {
   return (
      <div className="signin-container">
        
        <form className="signin-form">
        <h2>Sign In</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button class="buttons" type="submit">Sign In</button>
        </form>
      </div>
    );
  };

