import React, { Component } from "react";
import firebase from "./firebase";
import swal from "sweetalert";

import "./styles/App.scss";

import Header from "./Header";
import Main from "./Main";

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
        // newState.push(data[key]);
        newState.unshift({
          noticeId: key,
          recipient: data[key].recipient,
          message: data[key].message,
          sender: data[key].sender,
          likes: data[key].likes
        })
      }

      console.log(this.state.date);

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
      likes: 0
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
      swal("Uh-oh!", "You need to fill in the required fields.");
    }
  };

  handleLikeButton = (noticeId) => {
    const newState = {...this.state}
    const notices = newState.notices;

    const newNotices = notices.map((notice, i) => {
      if (notices[i].noticeId === noticeId) {
        notice.likes = notice.likes + 1
        const dbRef = firebase.database().ref(noticeId)
        dbRef.update({
          likes: notice.likes
        })
      }
      return notice;
    } )
    this.setState({
      notices: newNotices
    })
  }

  handleUserInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
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
          <Main notices={this.state.notices} likeButton={this.handleLikeButton}/>
          {/* <ul>
            {this.state.notices.map((notice, i) => {
              return <li key={i}>{notice.recipient}</li>
            })}
          </ul> */}
        </div>
        <footer className="largeWrapper">
          <p>&#169; Shanel Beebe 2020</p>
        </footer>
      </>
    );
  }
}

export default App;
