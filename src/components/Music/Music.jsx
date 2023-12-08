import React, { useState, useEffect } from "react";
import "./Music.css";

const Music = () => {
  const [audio] = useState(new Audio(".public/music/music.mp3"));
  const [isPlay, setPlay] = useState(false);

  const playMusic = () => {
    setPlay(!isPlay);
  };

  useEffect(() => {
    if (isPlay) {
      audio.loop = true;
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlay, audio]);

  return (
    <div className="music-container">
      <h1>Hello</h1>
      <button onClick={playMusic}>{isPlay ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Music;
