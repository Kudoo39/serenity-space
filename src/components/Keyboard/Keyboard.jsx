import React, { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboard } from "react-icons/md";
import "./Keyboard.css";

const Keyboard = () => {
  const [isKeyboard, setKeyboard] = useState(false);
  const toggleKeyboard = () => {
    setKeyboard(!isKeyboard);
  };
  const keyboarding = useRef(new Audio("/sound/keyboard.mp3"));

  useEffect(() => {
    keyboarding.current.loop = true;

    return () => {
      keyboarding.current.pause();
      keyboarding.current.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    isKeyboard ? keyboarding.current.play() : keyboarding.current.pause();
  }, [isKeyboard]);

  return (
    <div className="keyboard-container">
      <MdOutlineKeyboard onClick={toggleKeyboard} />
    </div>
  );
};

export default Keyboard;
