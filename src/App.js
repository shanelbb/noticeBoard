import React, { Component } from "react";
import Header from "./Header";
import Main from './Main'
import "./App.css";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <>
      <div className="headerBG largeWrapper">
        <Header />
      </div>
      <div className="mainBG largeWrapper">
        <Main />
      </div>
      <Footer />
      </>
    );
  }
}

export default App;
