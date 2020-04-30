import React from "react";
import "./styles/Main.scss";
import Likes from "./Likes";

const Main = (props) => {
  return (
    <main className="wrapper">
      <h4>Notices:</h4>
      <section className="notices">
        {props.notices.map((notice, i) => {
          return (
            <div key={i} className="notice">
              <h3 className="hi">Hi {notice.recipient}!</h3>
              <p className="message">{notice.message}</p>
              <h5 className="from">From {notice.sender || "Anonymous"}</h5>
              <Likes likeButton={props.likeButton} noticeId={notice.noticeId} likes={notice.likes}/>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
