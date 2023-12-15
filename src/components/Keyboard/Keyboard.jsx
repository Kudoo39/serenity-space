import React from "react";
import { MdOutlineKeyboard } from "react-icons/md";
import "./Keyboard.css";
import Sound from "../Sound/Sound";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <Sound audioSource="/sound/keyboard.mp3" icon={MdOutlineKeyboard} />
    </div>
  );
};

export default Keyboard;
