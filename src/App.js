import React from "react";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./components/style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
