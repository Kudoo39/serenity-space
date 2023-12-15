import React from "react";
import { IoIosPeople } from "react-icons/io";
import "./People.css";
import Sound from "../Sound/Sound";

const People = () => {
  return (
    <div className="people-container">
      <Sound audioSource="/sound/people.mp3" icon={IoIosPeople} />
    </div>
  );
};

export default People;
