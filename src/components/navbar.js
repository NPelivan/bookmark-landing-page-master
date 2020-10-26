import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Logo from "./images/logo-bookmark.svg";
import "./style.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-track">
        <img src={Logo} alt="logo" />

        <BrowserRouter>
          <nav className="nav-bar">
            <ul className="nav-wrapper">
              <li>
                <Link to="/">FEATURES</Link>
              </li>

              <li>
                <Link to="/">PRICING</Link>
              </li>

              <li>
                <Link to="/">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </BrowserRouter>
        <button>Login</button>
      </div>
    );
  }
}
