import React from "react";
import headerIllustration from "./assets/headerIllustration.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="wrapper">
      <h1>Notice Board</h1>
      <h3>
        Have you noticed something nice about someone you know lately? Let them
        know you’re thinking of them by leaving a note on our notice board.
      </h3>
      <section className="headerEls">
          <div className="newNotice">
            <h2>New Notice</h2>
            <span className="plus">+</span>
            <form action="">
              <input type="text" className="name" placeholder="Name of your recipient"/>
              <textarea type="text" className="newText" placeholder="What did you notice?"/>
            </form>
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
