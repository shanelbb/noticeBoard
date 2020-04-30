import React, { Component } from "react";

class Likes extends Component {
  render() {
    return (
      <div className="likesContainer">
        <button className="likes" onClick={() =>  this.props.likeButton(this.props.noticeId) } tabIndex='0'>
          <span aria-label="heart emoji like button" role='img'>❤️</span> {this.props.likes}
        </button>
      </div>
    );
  }
}

export default Likes;
