import React, { useState, useEffect, useRef } from "react";
import "./Music.css";
import { IoIosPlayCircle } from "react-icons/io";
import { FaRegPauseCircle } from "react-icons/fa";

const Music = () => {
  const musicRef = useRef(new Audio("../../public/music/music.mp3"));
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    const music = musicRef.current;
    music.loop = true;

    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, []);

  const playMusic = () => {
    setPlay(!isPlay);
  };

  isPlay ? musicRef.current.play() : musicRef.current.pause();

  return (
    <div className="music-container">
      <button onClick={playMusic}>
        {isPlay ? (
          <FaRegPauseCircle className="music-icon" />
        ) : (
          <IoIosPlayCircle className="music-icon" />
        )}
      </button>
    </div>
  );
};

export default Music;
