import { useState } from "react";
import "./styles/app.scss";
import data from "./utils";
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audio={currentSong.audio}
      />
    </div>
  );
}

export default App;
