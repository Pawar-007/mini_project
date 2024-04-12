import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
    <div className="containers">
    <div className="login-container">
    <h2>Login</h2>
    <form>
      <h4>Enter name</h4>
      <input type="text" placeholder="Username" required/><br/>
      <h4>Enter password</h4>
      <input type="password" placeholder="Password" required/><br></br>
      <button id="button1" type="submit">Login</button>
    </form>
    <div className="forgot-password">
      <Link to="">Forgot Password?</Link><br/>
      <Link to="/signin" style={{"color":'black'}}>New Registration</Link>
    </div>
  </div>
    </div>
     
  </>
    
  )
}
