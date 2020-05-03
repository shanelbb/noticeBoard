import React from "react";
import headerIllustration from "./assets/headerIllustration.png";
import "./styles/Header.scss";

const Header = (props) => {
  return (
    <header className="wrapper">
      <h1>Notice Board</h1>
      <p className="headingText">
        Have you noticed something nice about someone you know lately? Let them
        know you’re thinking of them by leaving a note on our notice board.
      </p>
      <section className="headerEls">
        <div className="newNotice">
          <h2>New Notice</h2>

          {/* handleSubmit function runs here when form is submitted */}
          <form action="" onSubmit={props.submit}>
            <button
              type="submit"
              className="plus"
              tabIndex="0"
              aria-label="addNotice"
            >
              +
            </button>
            {/* visuallyHidden label for accessiblity */}
            <label htmlFor="recipient" className="visuallyHidden">
              Name of your recipient (required)
            </label>
            <input
              tabIndex="0"
              // runs handleUserInput function when user types in the input
              onChange={props.userInput}
              id="recipient"
              type="text"
              className="name"
              placeholder="Name of your recipient *"
              maxLength="30"
              // updates the value of the input based on state that is being updated from handleUserInput function
              value={props.values.recipient}
            />
            <label htmlFor="message" className="visuallyHidden">
              What did you notice? (required)
            </label>
            <textarea
              tabIndex="0"
              onChange={props.userInput}
              id="message"
              type="text"
              className="newMessage"
              placeholder="What did you notice? *"
              maxLength="250"
              value={props.values.message}
            />
            <label htmlFor="sender" className="visuallyHidden">
              Your Name (optional)
            </label>
            <input
              tabIndex="0"
              onChange={props.userInput}
              id="sender"
              type="text"
              className="senderName"
              placeholder="Your Name (optional)"
              maxLength="30"
              value={props.values.sender}
            />
          </form>
          <p className="required">* = Required Field</p>
        </div>
        <div className="illustration">
          <img
            src={headerIllustration}
            alt="Illustration of a person walking up to a wall with notes pinned to it."
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
