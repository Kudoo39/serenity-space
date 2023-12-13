import React, { useState, useEffect, useRef } from "react";
import "./Background.css";
import Day from "../../assets/city/day.mp4";
import Rain from "../../assets/city/rain.mp4";
import { IoRainy, IoSunny } from "react-icons/io5";
import { FaSun, FaCloudRain } from "react-icons/fa6";

const Background = () => {
  const [weather, setWeather] = useState(Day);
  const raining = useRef(new Audio("/sound/rain.mp3"));

  const changeWeather = () => {
    setWeather((currentWeather) => {
      return currentWeather === Day ? Rain : Day;
    });
  };

  useEffect(() => {
    raining.current.loop = true;

    return () => {
      raining.current.pause();
      raining.current.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    weather === Rain ? raining.current.play() : raining.current.pause();
  }, [weather]);

  return (
    <div className="background-container">
      <div className="button-container">
        <div onClick={changeWeather}>
          {weather === Rain ? (
            <IoSunny className="weather-icon sun" />
          ) : (
            <FaCloudRain className="weather-icon" />
          )}
        </div>
      </div>
      <video key={weather} className="video" autoPlay loop muted>
        <source src={weather} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
