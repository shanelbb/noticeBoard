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
      // empty array where the content of each notice will be stored
      notices: [],
      recipient: "",
      message: "",
      sender: "",
    };
  }

  componentDidMount() {
    // stores the database in a variable
    const dbRef = firebase.database().ref();

    // retrieves data from firebase
    dbRef.on("value", (response) => {
      // new variable with an empty array where new data will be pushed in setState
      const newState = [];
      // response from firebase is stored in data variable
      const data = response.val();
      // loops throught the data and pushes each object to the newState array. Use unshift to
      // put newest objects at the beginning of the array
      for (let key in data) {
        newState.unshift({
          noticeId: key,
          recipient: data[key].recipient,
          message: data[key].message,
          sender: data[key].sender,
          likes: data[key].likes,
          datePosted: data[key].datePosted,
        });
      }
      // updates state with data that was pushed to the newState array
      this.setState({
        notices: newState,
      });
    });
  }

  // This functon runs when the + button is clicked
  handleSubmit = (e) => {
    e.preventDefault();
    // takes the keys and values and make them into an object
    const userInput = {
      recipient: this.state.recipient,
      message: this.state.message,
      sender: this.state.sender,
      likes: 0,
      datePosted: new Date().toDateString(),
    };
    //Sends the userInput object to the database so long as recipient and message inputs are not blank
    if (userInput.recipient !== "" && userInput.message !== "") {
      const dbRef = firebase.database().ref();
      dbRef.push(userInput);
      // scrolls to notices board once user has submitted their notice
      document.getElementById("notices").scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      // empties user inputs and updates state
      this.setState({
        recipient: "",
        message: "",
        sender: "",
      });
    } else {
      // error message displays when user hasn't filled out required fields
      swal("Uh-oh!", "You need to fill in the required fields.");
    }
  };

  // This function runs when the like (heart) button is clicked
  handleLikeButton = (noticeId) => {
    // makes a copy of state in a new variable
    const newState = { ...this.state };
    // new variable that contains the current state.notices array
    const notices = newState.notices;

    // new variable that maps over the notices array
    const newNotices = notices.map((notice, i) => {
      // checks if the noticeId of the notice that is clicked matches the noticeId in firebase
      if (notices[i].noticeId === noticeId) {
        // increments the notices by 1
        notice.likes = notice.likes + 1;

        // updates the number of likes in the database
        const dbRef = firebase.database().ref(noticeId);
        dbRef.update({
          likes: notice.likes,
        });
      }
      return notice;
    });
    // updates state to reflect the new number of likes
    this.setState({
      notices: newNotices,
    });
  };

  // Listens for user input, updates state to reflect that input
  handleUserInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <>
        {/* Header goes here. */}
        <div className="headerBG largeWrapper">
          <Header
            submit={this.handleSubmit}
            userInput={this.handleUserInput}
            values={this.state}
          />
        </div>
        {/* Main body goes here */}
        <div className="mainBG largeWrapper">
          <Main
            notices={this.state.notices}
            likeButton={this.handleLikeButton}
          />
        </div>

        {/* footer starts here */}
        <footer className="largeWrapper">
          <p>
            &#169;{" "}
            <a
              href="https://shanelbeebe.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shanel Beebe
            </a>{" "}
            2020
          </p>
          <p>
            Illustration by{" "}
            <a
              href="https://undraw.co/illustrations"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              undraw.co
            </a>
          </p>
        </footer>
      </>
    );
  }
}

export default App;
