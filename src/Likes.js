import React, { Component } from "react";

class Likes extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
    };
  }
  render() {
    return (
      <div className="likesContainer">
        <button
          className="likes"
          onClick={() => {
            this.props.likeButton(this.props.noticeId);
            // toggles liked state to true which disables the button so user can't like a post more than once.
            this.setState({ liked: true });
          }}
          disabled={this.state.liked}
          tabIndex="0"
        >
          <span aria-label="heart emoji like button" role="img">
            ❤️
          </span>{" "}
          {this.props.likes}
        </button>
      </div>
    );
  }
}

export default Likes;
