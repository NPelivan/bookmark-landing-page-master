import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Logo from "./images/logo-bookmark.svg";
import Facebook from "./images/icon-facebook.svg";
import Twitter from "./images/icon-twitter.svg";
import "./style.css";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      error: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["email"] = "";
      this.setState({ input: input });

      alert("Form is submitted");
    }
  }

  validate() {
    let input = this.state.input;
    let error = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      error["email"] = "Whoops, make sure it's an email";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        error["email"] = "Whoops, make sure it's an email";
      }
    }

    this.setState({
      error: error,
    });

    return isValid;
  }

  render() {
    return (
      <footer>
        <section className="contact">
          <span>35,000+ already joined</span>
          <h1>Stay up-to-date with what we’re doing</h1>

          <form
            name="form"
            action=""
            method="POST"
            autocomplete="on"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              name="email"
              placeholder="Enter your email adress"
              id="email"
              value={this.state.input.email}
              onChange={this.handleChange}
            />
            <div className="error">{this.state.error.email}</div>
            <button>Contact Us</button>
          </form>
        </section>

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
