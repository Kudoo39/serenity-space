import React, { useState, useEffect, useRef } from "react";

const Sound = ({ audioSource, icon: Icon }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const sounding = useRef(new Audio(audioSource));

  const toggleSound = () => {
    setPlaying(!isPlaying);
  };

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  useEffect(() => {
    sounding.current.loop = true;
    sounding.current.volume = volume;

    return () => {
      sounding.current.pause();
      sounding.current.currentTime = 0;
    };
  }, [volume]);

  useEffect(() => {
    isPlaying ? sounding.current.play() : sounding.current.pause();
  }, [isPlaying]);

  return (
    <div>
      <Icon onClick={toggleSound} />
      {isPlaying ? (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
        />
      ) : null}
    </div>
  );
};

export default Sound;
