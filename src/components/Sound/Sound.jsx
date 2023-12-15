import React, { useState, useEffect, useRef } from "react";

const Sound = ({ audioSource, icon: Icon }) => {
  const [isPlaying, setPlaying] = useState(false);
  const sounding = useRef(new Audio(audioSource));

  const toggleSound = () => {
    setPlaying(!isPlaying);
  };

  useEffect(() => {
    sounding.current.loop = true;

    return () => {
      sounding.current.pause();
      sounding.current.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    isPlaying ? sounding.current.play() : sounding.current.pause();
  }, [isPlaying]);

  return (
    <div>
      <Icon onClick={toggleSound} />
    </div>
  );
};

export default Sound;
