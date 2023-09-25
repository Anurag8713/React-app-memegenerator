import React from "react";
import img from ".//img/troll.png";

function Header() {
  return (
    <div className="header">
      <img
        className="header-img"
        src="https://e7.pngegg.com/pngimages/551/178/png-clipart-troll-face-left-troll-face-people-troll-face.png"
      />
      <h2 className="header-title">Meme Generator</h2>
      <p className="header-text">React project - project 3</p>
    </div>
  );
}

export default Header;
