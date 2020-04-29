import React from "react";
import "./styles/Main.scss";

const Main = (props) => {
  return (
    <main className="wrapper">
      <h4>Notices:</h4>
      <section className="notices">
        {props.notices.map((notice, i) => {
          return (
            <div key={i} className="notice">
              <h3 className="hi">Hi {notice.recipient}</h3>
              <p className="message">{notice.message}</p>
              <h5 className="from">From {notice.sender}</h5>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
