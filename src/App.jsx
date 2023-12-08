import React from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Music from "./components/Music/Music";

const App = () => {
  return (
    <div>
      <Background>
        <Music />
      </Background>
    </div>
  );
};

export default App;
