import { useState } from "react";
import "./styles/app.scss";
import data from "./utils";
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  //State
  const [songs, setSongs] = useState(data());

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
