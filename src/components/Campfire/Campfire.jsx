import React from "react";
import { GiCampfire } from "react-icons/gi";
import "./Campfire.css";
import Sound from "../Sound/Sound";

const Campfire = () => {
  return (
    <div className="campfire-container">
      <Sound audioSource="/sound/campfire.mp3" icon={GiCampfire} />
    </div>
  );
};

export default Campfire;
