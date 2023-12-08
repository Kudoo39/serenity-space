import React, { useState, useEffect } from "react";

const Music = () => {
  const [audio] = useState(new Audio("../../assets/music/music.mp3"));

  useEffect(() => {
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);
  return <div></div>;
};

export default Music;
