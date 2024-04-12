  import React from 'react'
  import './Navbar.css';
  import Login from './login';
  import { Link } from 'react-router-dom';
  //import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
  export default function Navbar() {
    return (
      <>
      <div>
      <nav className="nav_bar">
          <h3 id="name">FIYER</h3>
          <input type="text" id="search" placeholder="search for course"/>
          <Link to="/login" id='login'>Login</Link>
      </nav>
      </div>
      <div className="contain" >
      <Link className="link" to="/htmls">html</Link>
      <Link className="link" to="/css">CSS</Link>
      <Link className="link" to="/js">javaScript</Link>
        </div>
        </>
      )
    }
