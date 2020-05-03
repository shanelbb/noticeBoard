import React from "react";
import "./styles/Main.scss";
import Likes from "./Likes";

const Main = (props) => {
  return (
    <main className="wrapper" id="notices">
      <h4>Notices:</h4>
      <section className="notices">
        {/* maps over each notice from notices array in state */}
        {props.notices.map((notice, i) => {
          // displays a notice for each entry on the page
          return (
            <div key={i} className="notice">
              {/* displays the date the notice was posted */}
              <p className="date">{notice.datePosted}</p>
              {/* displays the content of the notice */}
              <h3 className="hi">Hi {notice.recipient}!</h3>
              <p className="message">{notice.message}</p>
              <h5 className="from">From {notice.sender || "Anonymous"}</h5>
              {/* displays the like button */}
              <Likes
                // passes the props down from App.js
                likeButton={props.likeButton}
                noticeId={notice.noticeId}
                likes={notice.likes}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
