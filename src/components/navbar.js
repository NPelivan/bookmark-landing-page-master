import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Logo from "./images/logo-bookmark.svg";
import "./style.css";
import Hamburger from "./images/icon-hamburger.svg";
import Logowhite from "./images/logo-bookmark-white.svg";
import Close from "./images/icon-close.svg";

export default class Navbar extends Component {
  state = {
    on: false,
  };

  clickNav = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    return (
      <>
        <header className="nav-track">
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
          <button className="nav-button">Login</button>
        </header>

        <div className="mobile-nav-track">
          <img src={Logo} alt="Logo" />
          <img src={Hamburger} alt="Hamburger icon" onClick={this.clickNav} />

          {this.state.on && (
            <div className="mobile-nav">
              <div>
                <img src={Logowhite} alt="Logo" />
                <img src={Close} alt="Close button" onClick={this.clickNav} />
              </div>
              <BrowserRouter>
                <nav>
                  <ul>
                    <hr />
                    <li>
                      <Link to="/">FEATURES</Link>
                    </li>
                    <hr />

                    <li>
                      <Link to="/">PRICING</Link>
                    </li>
                    <hr />

                    <li>
                      <Link to="/">CONTACT</Link>
                    </li>
                    <hr />
                  </ul>
                </nav>
              </BrowserRouter>

              <button>Login</button>
            </div>
          )}
        </div>
      </>
    );
  }
}
