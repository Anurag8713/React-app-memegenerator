import React, { useState } from "react";
import Header from "./components/Header";
import Text from "./components/Text";

function App() {
  const [memes, setmemesAll] = useState({
    Toptext: "",
    Bottomtext: "",
    randomImage: "https://i.imgflip.com/4acd7j.png",
    Dimension1: "",
    Dimension2: "",
  });

  console.log(memes.randomImage);

  const [font, setfont] = useState(70);

  function handleFontChange(e) {
    setfont(e.target.value);
  }

  useState(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setmemesAll(data));
  }, [memes]);

  function getMemesImg() {
    const memesArray = memes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let imgurl = memesArray[randomNumber].url;
    let length = memesArray[randomNumber].width;
    let breath = memesArray[randomNumber].height;
    setmemesAll((prevmeme) => ({
      ...prevmeme,
      randomImage: imgurl,
      Dimension1: length,
      Dimension2: breath,
    }));
  }

  function handlechange(e) {
    setmemesAll((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div>
      <Header />
      <Text
        onchange={handlechange}
        memes={memes}
        getMemesImg={getMemesImg}
        handleFontChange={handleFontChange}
        font={font}
      />
    </div>
  );
}

export default App;
