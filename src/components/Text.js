import React from "react";

function Text({ onchange, memes, getMemesImg, handleFontChange, font }) {
  return (
    <div className="text-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Top text..."
          className="toptext"
          name="Toptext"
          onChange={onchange}
        />
        <input
          type="number"
          className="font"
          placeholder="FontSize..."
          onChange={handleFontChange}
          min="50"
          max="100"
        />
        <input
          type="text"
          placeholder="Bottom text..."
          className="bottontext"
          name="Bottomtext"
          onChange={onchange}
        />
      </div>

      <button className="text-button" onClick={getMemesImg}>
        Get Next Memes
      </button>
      <div className="img-container">
        <img
          src={memes.randomImage}
          width={memes.Dimession1}
          height={memes.Dimession2}
          className="meme-img"
        ></img>
        <h1 className="text1" style={{ fontSize: `${font}` + "px" }}>
          {memes.Toptext}
        </h1>
        <h1 className="text2" style={{ fontSize: `${font}` + "px" }}>
          {memes.Bottomtext}
        </h1>
      </div>
    </div>
  );
}

export default Text;
