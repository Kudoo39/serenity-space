import React, { useState, useEffect, useRef } from "react";
import "./Music.css";
import {
  IoIosPlayCircle,
  IoIosSkipBackward,
  IoIosSkipForward,
} from "react-icons/io";
import { FaRegPauseCircle } from "react-icons/fa";

const Music = () => {
  const musicList = [
    "music.mp3",
    "music1.mp3",
    "music2.mp3",
    "music3.mp3",
    "music4.mp3",
    "music5.mp3",
    "music6.mp3",
    "music7.mp3",
    "music8.mp3",
    "music9.mp3",
    "music10.mp3",
    "music11.mp3",
    "music12.mp3",
    "music13.mp3",
    "music14.mp3",
    "music15.mp3",
    "music16.mp3",
    "music17.mp3",
    "music18.mp3",
    "music19.mp3",
    "music20.mp3",
    "music21.mp3",
    "music22.mp3",
    "music23.mp3",
    "music24.mp3",
    "music25.mp3",
    "music26.mp3",
  ];
  const [index, setIndex] = useState(0);
  const musicRef = useRef(new Audio(`../../public/music/${musicList[index]}`));
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    const music = musicRef.current;
    music.loop = true;

    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    musicRef.current = new Audio(`../../public/music/${musicList[index]}`);
    setPlay(isPlay);
    isPlay ? musicRef.current.play() : musicRef.current.pause();
  }, [index]);

  useEffect(() => {
    isPlay ? musicRef.current.play() : musicRef.current.pause();
  }, [isPlay]);

  const playMusic = () => {
    setPlay(!isPlay);
  };

  const previousMusic = () => {
    setIndex((index) => (index - 1 + musicList.length) % musicList.length);
    console.log("previous");
  };

  const nextMusic = () => {
    setIndex((index) => (index + 1) % musicList.length);
    console.log("next");
  };

  return (
    <div className="music-container">
      <div className="button">
        <IoIosSkipBackward className="music-icon" onClick={previousMusic} />
        {isPlay ? (
          <FaRegPauseCircle className="music-icon" onClick={playMusic} />
        ) : (
          <IoIosPlayCircle className="music-icon" onClick={playMusic} />
        )}
        <IoIosSkipForward className="music-icon" onClick={nextMusic} />
      </div>
    </div>
  );
};

export default Music;
