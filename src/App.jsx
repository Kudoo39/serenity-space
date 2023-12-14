import React from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Music from "./components/Music/Music";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

const App = () => {
  const handle = useFullScreenHandle();
  const toggleFullscreen = () => {
    handle.active ? handle.exit() : handle.enter();
  };
  return (
    <div>
      <FullScreen handle={handle}>
        <div onClick={toggleFullscreen} className="handle-button">
          {handle.active ? <MdFullscreenExit /> : <MdFullscreen />}
        </div>
        <Music />
        <Background />
      </FullScreen>
    </div>
  );
};

export default App;
