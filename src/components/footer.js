import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Logo from "./images/logo-bookmark.svg";
import Facebook from "./images/icon-facebook.svg";
import Twitter from "./images/icon-twitter.svg";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span>More Info 35,000+ already joined</span>
        <h1>Stay up-to-date with what we’re doing</h1>

        <img src={Logo} alt="logo" />

        <BrowserRouter>
          <nav>
            <ul>
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

        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
        <img />
      </footer>
    );
  }
}
