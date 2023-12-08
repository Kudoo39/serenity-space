import React, { useState, useEffect } from "react";
import "./Music.css";

const Music = () => {
  const [isPlay, setPlay] = useState(false);
  let music = new Audio("../../public/music/music.mp3");

  const playMusic = () => {
    setPlay(!isPlay);
  };

  isPlay ? music.play() : music.pause();

  return (
    <div className="music-container">
      <h1>Hello</h1>
      <button onClick={playMusic}>PLAY</button>
    </div>
  );
};

export default Music;
