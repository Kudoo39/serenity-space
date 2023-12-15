import React, { useState, useEffect, useRef } from "react";
import { GiElectric } from "react-icons/gi";
import "./Storm.css";
import Sound from "../Sound/Sound";

const Storm = () => {
  return (
    <div className="storm-container">
      <Sound audioSource="/sound/storm.mp3" icon={GiElectric} />
    </div>
  );
};

export default Storm;
