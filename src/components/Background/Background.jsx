import React, { useState } from "react";
import "./Background.css";
import Day from "../../assets/city/day.mp4";
import Rain from "../../assets/city/rain.mp4";

const Background = () => {
  const [weather, setWeather] = useState(Day);

  const changeWeather = () => {
    console.log("Changing weather...");
    setWeather((currentWeather) => {
      console.log("Current Weather:", currentWeather);
      return currentWeather === Day ? Rain : Day;
    });
  };

  return (
    <div className="background-container">
      <button onClick={changeWeather}>Boom!</button>
      <video key={weather} className="video" autoPlay loop muted>
        <source src={weather} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
