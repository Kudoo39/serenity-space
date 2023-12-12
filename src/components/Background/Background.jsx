import React, { useState } from "react";
import "./Background.css";
import Day from "../../assets/city/day.mp4";
import Rain from "../../assets/city/rain.mp4";
import { IoRainy } from "react-icons/io5";
import LazyLoad from "react-lazy-load";

const Background = () => {
  const [weather, setWeather] = useState(Day);

  const changeWeather = () => {
    setWeather((currentWeather) => {
      return currentWeather === Day ? Rain : Day;
    });
  };

  return (
    <div className="background-container">
      <div className="button-container">
        <div onClick={changeWeather}>
          <IoRainy className="weather-icon" />
        </div>
      </div>
      <LazyLoad height={762} offset={300}>
        <video key={weather} className="video" autoPlay loop muted>
          <source src={weather} type="video/mp4" />
        </video>
      </LazyLoad>
    </div>
  );
};

export default Background;
