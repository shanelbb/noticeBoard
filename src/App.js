import React, { Component } from "react";
import firebase from "./firebase";

import "./styles/App.scss";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


class App extends Component {
  constructor() {
    super();
    this.state = {
      notices: [],
      recipient: "",
      message: "",
      sender: "",
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
      }

      this.setState({
        notices: newState,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // take the keys and values
    //and make them into an object
    const userInput = {
      recipient: this.state.recipient,
      message: this.state.message,
      sender: this.state.sender,
    };
    //and send that to the database.
    if (userInput.recipient !== "" && userInput.message !== "") {
      const dbRef = firebase.database().ref();
      dbRef.push(userInput);
      this.setState({
        recipient: "",
        message: "",
        sender: "",
      });
    } else {
      alert("Please fill in required fields");
    }
  };

  handleUserInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });

    console.log("State", this.state);
  };

  render() {
    return (
      <>
        <div className="headerBG largeWrapper">
          <Header
            submit={this.handleSubmit}
            userInput={this.handleUserInput}
            values={this.state}
          />
        </div>
        <div className="mainBG largeWrapper">
          <Main notices={this.state.notices} />
          {/* <ul>
            {this.state.notices.map((notice, i) => {
              return <li key={i}>{notice.recipient}</li>
            })}
          </ul> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
