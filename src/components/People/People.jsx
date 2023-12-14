import React, { useState, useEffect, useRef } from "react";
import { IoIosPeople } from "react-icons/io";
import "./People.css";

const People = () => {
  const [isPeople, setPeople] = useState(false);
  const toggleKeyboard = () => {
    setPeople(!isPeople);
  };
  const people = useRef(new Audio("/sound/people.mp3"));

  useEffect(() => {
    people.current.loop = true;

    return () => {
      people.current.pause();
      people.current.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    isPeople ? people.current.play() : people.current.pause();
  }, [isPeople]);

  return (
    <div className="people-container">
      <IoIosPeople onClick={toggleKeyboard} />
    </div>
  );
};

export default People;
